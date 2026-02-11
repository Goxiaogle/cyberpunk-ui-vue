import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import ts from 'typescript'

function toKebabCase(name) {
  return name
    .replace(/^Cp/, 'cp-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

function getExportModules(componentsRoot) {
  const componentsIndexPath = resolve(componentsRoot, 'index.ts')
  const indexContent = readFileSync(componentsIndexPath, 'utf8')
  return [...indexContent.matchAll(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]/g)].map((match) => match[1])
}

function normalizeText(value) {
  return value.replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').trim()
}

function getLeadingJsDocText(sourceText, node) {
  const ranges = ts.getLeadingCommentRanges(sourceText, node.getFullStart()) || []
  for (let index = ranges.length - 1; index >= 0; index -= 1) {
    const range = ranges[index]
    const comment = sourceText.slice(range.pos, range.end)
    if (comment.startsWith('/**')) {
      return comment
    }
  }
  return ''
}

function parseJsDoc(commentText) {
  if (!commentText) return { description: '', tags: new Map() }

  const inner = commentText
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*?\s?/, ''))

  const descriptionLines = []
  const tags = new Map()
  let currentTag = ''

  for (const rawLine of inner) {
    const line = rawLine.trimEnd()
    const tagMatch = line.match(/^@([a-zA-Z][\w-]*)\s*(.*)$/)
    if (tagMatch) {
      currentTag = tagMatch[1]
      const value = tagMatch[2]?.trim() || ''
      if (!tags.has(currentTag)) tags.set(currentTag, [])
      tags.get(currentTag).push(value)
      continue
    }

    if (currentTag) {
      if (line.trim() === '') continue
      const values = tags.get(currentTag)
      values[values.length - 1] = `${values[values.length - 1]} ${line.trim()}`.trim()
      continue
    }

    descriptionLines.push(line)
  }

  return {
    description: normalizeText(descriptionLines.join('\n')),
    tags
  }
}

function parseSlotTags(slotTagValues) {
  return slotTagValues
    .map((rawValue) => {
      const normalized = rawValue.replace(/`/g, '').trim()
      if (!normalized) return null
      const match = normalized.match(/^([A-Za-z0-9:_-]+)\s*(?:-\s*(.+))?$/)
      if (!match) return null
      return {
        name: match[1],
        description: normalizeText(match[2] || '')
      }
    })
    .filter(Boolean)
}

function isWithInstallCall(initializer) {
  return ts.isCallExpression(initializer) && ts.isIdentifier(initializer.expression) && initializer.expression.text === 'withInstall'
}

function getSourceText(node, sourceText) {
  return sourceText.slice(node.pos, node.end).trim()
}

function simplifyTypeText(typeText) {
  return typeText.replace(/\s+/g, ' ').trim()
}

function extractGenericType(typeExpression, marker) {
  const start = typeExpression.indexOf(marker)
  if (start < 0) return ''

  let depth = 1
  let cursor = start + marker.length
  for (; cursor < typeExpression.length; cursor += 1) {
    const character = typeExpression[cursor]
    if (character === '<') depth += 1
    if (character === '>') depth -= 1
    if (depth === 0) {
      return typeExpression.slice(start + marker.length, cursor)
    }
  }

  return ''
}

function mapConstructorType(typeText) {
  const normalized = typeText.trim()
  const map = new Map([
    ['String', 'string'],
    ['StringConstructor', 'string'],
    ['Number', 'number'],
    ['NumberConstructor', 'number'],
    ['Boolean', 'boolean'],
    ['BooleanConstructor', 'boolean'],
    ['Object', 'object'],
    ['ObjectConstructor', 'object'],
    ['Array', 'array'],
    ['ArrayConstructor', 'array'],
    ['Function', 'Function'],
    ['FunctionConstructor', 'Function']
  ])

  return map.get(normalized) || ''
}

function parsePropType(typeExpression) {
  if (!typeExpression) return ''

  const propType = extractGenericType(typeExpression, 'PropType<')
  if (propType) {
    return simplifyTypeText(propType)
  }

  const arrayMatch = typeExpression.match(/^\[\s*([\s\S]+)\s*\]$/)
  if (arrayMatch) {
    const parts = arrayMatch[1].split(',').map((part) => part.trim()).filter(Boolean)
    const mapped = parts.map((part) => mapConstructorType(part) || simplifyTypeText(part))
    return simplifyTypeText(mapped.join(' | '))
  }

  return mapConstructorType(typeExpression) || simplifyTypeText(typeExpression)
}

function serializeDefaultValue(defaultExpression) {
  if (!defaultExpression) return undefined
  const normalized = simplifyTypeText(defaultExpression)
  if (normalized === 'undefined' || normalized === 'void 0') return undefined
  return normalized
}

function unwrapInitializer(initializer) {
  let current = initializer
  while (
    ts.isAsExpression(current)
    || ts.isTypeAssertionExpression(current)
    || ts.isParenthesizedExpression(current)
    || (ts.isSatisfiesExpression?.(current) ?? false)
  ) {
    current = current.expression
  }
  return current
}

function getPropertyName(propertyNameNode) {
  if (ts.isIdentifier(propertyNameNode)) return propertyNameNode.text
  if (ts.isStringLiteral(propertyNameNode)) return propertyNameNode.text
  if (ts.isNumericLiteral(propertyNameNode)) return propertyNameNode.text
  return ''
}

function findExportedConstDeclaration(sourceFile, predicate) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue
    const isExported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)
    if (!isExported) continue

    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name)) continue
      if (predicate(declaration.name.text)) {
        return { statement, declaration }
      }
    }
  }
  return null
}

function resolveImportTsPath(filePath, importPath) {
  if (!importPath || !importPath.startsWith('.')) return ''

  const basePath = resolve(filePath, '..', importPath)
  const candidates = [
    `${basePath}.ts`,
    `${basePath}.tsx`,
    `${basePath}.d.ts`,
    resolve(basePath, 'index.ts')
  ]

  return candidates.find((candidate) => existsSync(candidate)) || ''
}

function extractScriptSetup(vueContent) {
  const match = vueContent.match(/<script\b[^>]*\bsetup\b[^>]*>([\s\S]*?)<\/script>/i)
  return match?.[1] || ''
}

function extractMacroBinding(vueFilePath, macroName) {
  if (!existsSync(vueFilePath)) return { identifier: '', sourcePath: '' }

  const vueContent = readFileSync(vueFilePath, 'utf8')
  const scriptContent = extractScriptSetup(vueContent)
  if (!scriptContent) return { identifier: '', sourcePath: '' }

  const sourceFile = ts.createSourceFile(vueFilePath, scriptContent, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const imports = new Map()
  let macroIdentifier = ''

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement)) continue
    if (!statement.importClause) continue
    if (!ts.isStringLiteral(statement.moduleSpecifier)) continue

    const fromPath = statement.moduleSpecifier.text
    if (statement.importClause.name) {
      imports.set(statement.importClause.name.text, fromPath)
    }

    const namedBindings = statement.importClause.namedBindings
    if (namedBindings && ts.isNamedImports(namedBindings)) {
      for (const element of namedBindings.elements) {
        imports.set(element.name.text, fromPath)
      }
    }
  }

  const visit = (node) => {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === macroName) {
      if (node.arguments.length === 1 && ts.isIdentifier(node.arguments[0])) {
        macroIdentifier = node.arguments[0].text
      }
    }
    ts.forEachChild(node, visit)
  }

  ts.forEachChild(sourceFile, visit)

  const sourcePath = resolveImportTsPath(vueFilePath, imports.get(macroIdentifier) || '')
  return { identifier: macroIdentifier, sourcePath }
}

function parsePropsFromSource(sourceFilePath, propsIdentifier) {
  if (!sourceFilePath || !existsSync(sourceFilePath)) return []

  const sourceText = readFileSync(sourceFilePath, 'utf8')
  const sourceFile = ts.createSourceFile(sourceFilePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

  const declarationMatch = propsIdentifier
    ? findExportedConstDeclaration(sourceFile, (name) => name === propsIdentifier)
    : findExportedConstDeclaration(sourceFile, (name) => name.endsWith('Props'))

  if (!declarationMatch?.declaration.initializer) return []

  const initializer = unwrapInitializer(declarationMatch.declaration.initializer)
  if (!ts.isObjectLiteralExpression(initializer)) return []

  const props = []
  for (const property of initializer.properties) {
    if (!ts.isPropertyAssignment(property)) continue

    const name = getPropertyName(property.name)
    if (!name) continue

    const jsDoc = parseJsDoc(getLeadingJsDocText(sourceText, property))
    let typeExpression = ''
    let required = false
    let defaultValue

    if (ts.isObjectLiteralExpression(property.initializer)) {
      for (const optionProperty of property.initializer.properties) {
        if (!ts.isPropertyAssignment(optionProperty)) continue
        const optionName = getPropertyName(optionProperty.name)
        if (optionName === 'type') {
          typeExpression = getSourceText(optionProperty.initializer, sourceText)
        }
        if (optionName === 'required' && optionProperty.initializer.kind === ts.SyntaxKind.TrueKeyword) {
          required = true
        }
        if (optionName === 'default') {
          defaultValue = serializeDefaultValue(getSourceText(optionProperty.initializer, sourceText))
        }
      }
    } else {
      typeExpression = getSourceText(property.initializer, sourceText)
    }

    const propItem = { name }
    const description = jsDoc.description
    if (description) propItem.description = description
    if (required) propItem.required = true
    if (defaultValue !== undefined) propItem.default = defaultValue

    const parsedType = parsePropType(typeExpression)
    if (parsedType) {
      propItem.type = [parsedType]
    }

    props.push(propItem)
  }

  return props
}

function parseEmitsFromSource(sourceFilePath, emitsIdentifier) {
  if (!sourceFilePath || !existsSync(sourceFilePath)) return []

  const sourceText = readFileSync(sourceFilePath, 'utf8')
  const sourceFile = ts.createSourceFile(sourceFilePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

  const declarationMatch = emitsIdentifier
    ? findExportedConstDeclaration(sourceFile, (name) => name === emitsIdentifier)
    : findExportedConstDeclaration(sourceFile, (name) => name.endsWith('Emits'))

  if (!declarationMatch?.declaration.initializer) return []

  const initializer = unwrapInitializer(declarationMatch.declaration.initializer)
  if (!ts.isObjectLiteralExpression(initializer)) return []

  const events = []
  for (const property of initializer.properties) {
    if (!ts.isPropertyAssignment(property) && !ts.isMethodDeclaration(property)) continue

    const name = getPropertyName(property.name)
    if (!name) continue

    const jsDoc = parseJsDoc(getLeadingJsDocText(sourceText, property))
    const eventItem = { name }
    if (jsDoc.description) eventItem.description = jsDoc.description
    events.push(eventItem)
  }

  return events
}

function collectComponentMeta(componentsRoot) {
  const exportModules = getExportModules(componentsRoot)
  const allComponents = []

  for (const moduleName of exportModules) {
    const moduleDir = resolve(componentsRoot, moduleName)
    const moduleEntryPath = resolve(moduleDir, 'index.ts')
    if (!existsSync(moduleEntryPath)) continue

    const moduleContent = readFileSync(moduleEntryPath, 'utf8')
    const sourceFile = ts.createSourceFile(moduleEntryPath, moduleContent, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)

    const vueImports = new Map()
    for (const statement of sourceFile.statements) {
      if (!ts.isImportDeclaration(statement)) continue
      if (!statement.importClause?.name) continue
      if (!ts.isStringLiteral(statement.moduleSpecifier)) continue

      const importPath = statement.moduleSpecifier.text
      if (importPath.endsWith('.vue')) {
        vueImports.set(statement.importClause.name.text, importPath)
      }
    }

    for (const statement of sourceFile.statements) {
      if (!ts.isVariableStatement(statement)) continue
      const isExported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)
      if (!isExported) continue

      const componentDoc = parseJsDoc(getLeadingJsDocText(moduleContent, statement))
      const slots = parseSlotTags(componentDoc.tags.get('slot') || [])

      for (const declaration of statement.declarationList.declarations) {
        if (!ts.isIdentifier(declaration.name)) continue
        if (!/^Cp[A-Za-z0-9]+$/.test(declaration.name.text)) continue
        if (!declaration.initializer || !isWithInstallCall(declaration.initializer)) continue
        if (!ts.isIdentifier(declaration.initializer.arguments[0])) continue

        const componentName = declaration.name.text
        const importBinding = declaration.initializer.arguments[0].text
        const vueRelativePath = vueImports.get(importBinding)
        if (!vueRelativePath) continue

        const vueFilePath = resolve(moduleDir, vueRelativePath)
        const propsBinding = extractMacroBinding(vueFilePath, 'defineProps')
        const emitsBinding = extractMacroBinding(vueFilePath, 'defineEmits')

        const defaultSourcePath = resolve(moduleDir, vueRelativePath.replace(/\.vue$/, '.ts'))
        const propsSourcePath = propsBinding.sourcePath || (existsSync(defaultSourcePath) ? defaultSourcePath : '')
        const emitsSourcePath = emitsBinding.sourcePath || propsSourcePath

        const props = parsePropsFromSource(propsSourcePath, propsBinding.identifier)
        const events = parseEmitsFromSource(emitsSourcePath, emitsBinding.identifier)

        allComponents.push({
          componentName,
          tagName: toKebabCase(componentName),
          description: componentDoc.description,
          slots,
          props,
          events
        })
      }
    }
  }

  return allComponents.sort((left, right) => left.componentName.localeCompare(right.componentName))
}

function formatJsDoc(description, indent = '    ') {
  if (!description) return ''
  const normalized = description.replace(/\*\//g, '*\\/').split('\n')
  const lines = [
    `${indent}/**`,
    ...normalized.map((line) => `${indent} * ${line}`),
    `${indent} */`
  ]
  return `${lines.join('\n')}\n`
}

function generateGlobalTypes(packageName, components) {
  const lines = components.map((item) => {
    const doc = formatJsDoc(item.description)
    const declaration = `    ${item.componentName}: typeof import('${packageName}')['${item.componentName}']`
    return `${doc}${declaration}`
  })
  return `/* eslint-disable */
// Auto-generated by scripts/generate-meta.mjs. Do not edit.
declare module 'vue' {
  export interface GlobalComponents {
${lines.join('\n')}
  }
}

export {}
`
}

function generateWebTypes(packageName, packageVersion, components) {
  const tags = components.map((item) => ({
    name: item.tagName,
    ...(item.description ? { description: item.description } : {}),
    source: {
      module: packageName,
      symbol: item.componentName
    }
  }))

  const vueComponents = components.map((item) => {
    const component = {
      name: item.tagName,
      source: {
        module: packageName,
        symbol: item.componentName
      }
    }

    if (item.description) component.description = item.description
    if (item.props.length > 0) component.props = item.props
    if (item.slots.length > 0) component.slots = item.slots
    if (item.events.length > 0) {
      component.js = { events: item.events }
    }

    return component
  })

  return {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    name: packageName,
    version: packageVersion,
    framework: 'vue',
    'js-types-syntax': 'typescript',
    contributions: {
      html: {
        tags,
        'vue-components': vueComponents
      }
    }
  }
}

function main() {
  const packageRoot = resolve(import.meta.dirname, '..')
  const componentsRoot = resolve(packageRoot, '../components')
  const packageJsonPath = resolve(packageRoot, 'package.json')
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))

  const components = collectComponentMeta(componentsRoot)
  if (components.length === 0) {
    throw new Error('No installable components found in packages/components.')
  }
  const componentNames = components.map((item) => item.componentName)

  const globalTypesPath = resolve(packageRoot, 'global.d.ts')
  const webTypesPath = resolve(packageRoot, 'web-types.json')

  writeFileSync(globalTypesPath, generateGlobalTypes(packageJson.name, components), 'utf8')
  writeFileSync(webTypesPath, `${JSON.stringify(generateWebTypes(packageJson.name, packageJson.version, components), null, 2)}\n`, 'utf8')

  console.log(`[meta] Generated ${componentNames.length} components with props docs into global.d.ts and web-types.json`)
}

main()
