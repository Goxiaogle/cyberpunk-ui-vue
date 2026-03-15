/**
 * generate-skills.mjs — 自动生成组件参考文档
 *
 * 从 TypeScript Props/Emits 定义和 SCSS 文件自动提取组件 API，
 * 按 @category 分组输出 Markdown 表格格式的参考文档。
 *
 * 用法:
 *   pnpm gen:skills                  # 生成全部
 *   pnpm gen:skills --only button    # 仅生成指定组件
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')
const COMPONENTS_DIR = path.join(ROOT_DIR, 'packages/components')
const SCSS_DIR = path.join(ROOT_DIR, 'packages/theme-chalk/src/components')
const SKILL_DIR = path.join(ROOT_DIR, 'skills/cyberpunk-vue')
const REFERENCES_DIR = path.join(SKILL_DIR, 'references')
const TEMPLATES_DIR = path.join(__dirname, 'templates')

// ===== CLI 参数 =====
const args = process.argv.slice(2)
let onlyComponent = null
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--only' && args[i + 1]) {
    onlyComponent = args[i + 1]
    i++
  }
}

// ===== 配置加载 =====
let config = {}
try {
  const configPath = new URL('../skills.config.mjs', import.meta.url)
  const mod = await import(configPath)
  config = mod.default || {}
} catch {
  console.log('未找到 skills.config.mjs，使用默认行为')
}

// @category → 文件名映射
const CATEGORY_MAP = {
  '基础组件': 'components-basic',
  '表单组件': 'components-form',
  '展示组件': 'components-display',
  '导航组件': 'components-navigation',
  '布局组件': 'components-layout',
  '服务组件': 'components-service',
}

// ===== 解析工具函数 =====

/**
 * 提取 JSDoc 注释块列表
 * 返回 [{ comment: string, nextLine: string, startIdx: number }]
 */
function extractJsDocBlocks(content) {
  const blocks = []
  const regex = /\/\*\*([\s\S]*?)\*\//g
  let match
  while ((match = regex.exec(content)) !== null) {
    const endIdx = match.index + match[0].length
    const remaining = content.slice(endIdx).replace(/^\s*\r?\n?/, '')
    const nextLine = remaining.split(/\r?\n/)[0]?.trim() || ''
    blocks.push({
      comment: match[1],
      nextLine,
      fullMatch: match[0],
      startIdx: match.index,
      endIdx,
    })
  }
  return blocks
}

/**
 * 从 JSDoc 注释中提取指定 tag 的值
 */
function extractTag(comment, tag) {
  const regex = new RegExp(`@${tag}\\s+(.+?)(?=\\n\\s*\\*\\s*@|$)`, 's')
  const m = comment.match(regex)
  return m ? m[1].replace(/\n\s*\*\s?/g, '\n').trim() : ''
}

/**
 * 从 JSDoc 注释中提取多行 tag（如 @slots, @exposes）
 */
function extractListTag(comment, tag) {
  const regex = new RegExp(`@${tag}\\s*\\n([\\s\\S]*?)(?=\\n\\s*\\*\\s*@[a-z]|$)`)
  const m = comment.match(regex)
  if (!m) return []
  const lines = m[1].split('\n')
  const items = []
  for (const line of lines) {
    const cleaned = line.replace(/^\s*\*\s?/, '').trim()
    // 匹配: - `name` - 描述 或 - `name` - 描述 (默认: "xxx")
    const itemMatch = cleaned.match(/^-\s+`([^`]+)`\s*[-—]\s*(.+)$/)
    if (itemMatch) {
      const name = itemMatch[1]
      const fullDesc = itemMatch[2].trim()
      // 提取 (默认: "xxx")
      const defaultMatch = fullDesc.match(/\(默认:\s*"([^"]+)"\)/)
      items.push({
        name,
        description: defaultMatch ? fullDesc.replace(defaultMatch[0], '').trim() : fullDesc,
        defaultContent: defaultMatch ? defaultMatch[1] : '',
      })
    }
  }
  return items
}

/**
 * 提取 @example 代码块
 */
function extractExample(comment) {
  const regex = /@example\s*\n([\s\S]*?)(?=\n\s*\*\s*@[a-z]|\n\s*\*\/|$)/
  const m = comment.match(regex)
  if (!m) return ''
  let code = m[1]
    .split('\n')
    .map((l) => l.replace(/^\s*\*\s?/, ''))
    .join('\n')
    .trim()
  // 去掉外层 ```vue ... ``` (可能多种变体)
  code = code.replace(/^```\w*\r?\n/, '').replace(/\r?\n```\s*$/, '')
  return code.trim()
}

// ===== 类型解析 =====

/**
 * 收集文件内所有 type alias 定义
 */
function collectTypeAliases(content) {
  const aliases = {}
  // 匹配: export type XxxType = 'a' | 'b' | 'c'
  const regex = /export\s+type\s+(\w+)\s*=\s*([^;\n]+)/g
  let m
  while ((m = regex.exec(content)) !== null) {
    aliases[m[1]] = m[2].trim()
  }
  return aliases
}

/**
 * 将 Vue PropType 声明转为可读类型字符串
 */
function resolveType(rawType, typeAliases) {
  let t = rawType.trim()

  // 先处理: [String, Number] as PropType<XxxType>
  const fullMatch = t.match(/^\[([^\]]+)\]\s+as\s+PropType<([^>]+)>/)
  if (fullMatch) {
    const alias = fullMatch[2].trim()
    if (typeAliases[alias]) {
      return cleanUnionType(typeAliases[alias])
    }
    return cleanUnionType(alias)
  }

  // String as PropType<XxxType>
  const propTypeMatch = t.match(/as\s+PropType<([^>]+)>/)
  if (propTypeMatch) {
    const alias = propTypeMatch[1].trim()
    if (typeAliases[alias]) {
      return cleanUnionType(typeAliases[alias])
    }
    return cleanUnionType(alias)
  }

  // PropType<XxxType> alone
  const propTypeOnly = t.match(/PropType<([^>]+)>/)
  if (propTypeOnly) {
    const alias = propTypeOnly[1].trim()
    if (typeAliases[alias]) {
      return cleanUnionType(typeAliases[alias])
    }
    return cleanUnionType(alias)
  }

  // [String, Number] → string | number (no PropType)
  const arrayMatch = t.match(/^\[([^\]]+)\]/)
  if (arrayMatch) {
    return arrayMatch[1]
      .split(',')
      .map((s) => s.trim().replace(/^(String|Number|Boolean|Object|Array|Function)$/, (m) => m.toLowerCase()))
      .join(' | ')
  }

  // String → string
  return t.replace(/^(String|Number|Boolean|Object|Array|Function)$/, (m) => m.toLowerCase())
}

function cleanUnionType(type) {
  return type
    .replace(/\s*\|\s*/g, ' | ')
    .replace(/\s+/g, ' ')
    .trim()
}

// ===== Props 解析 =====

function parseProps(content, typeAliases) {
  const props = []
  const blocks = extractJsDocBlocks(content)

  // 找到 xxxProps = { ... } 的范围
  const propsObjMatch = content.match(/export\s+const\s+\w+Props\s*=\s*\{/)
  if (!propsObjMatch) return props

  const propsStart = propsObjMatch.index
  // 找到配对的 } as const
  let braceCount = 0
  let propsEnd = content.length
  let foundOpen = false
  for (let i = propsStart; i < content.length; i++) {
    if (content[i] === '{') {
      braceCount++
      foundOpen = true
    }
    if (content[i] === '}') {
      braceCount--
      if (foundOpen && braceCount === 0) {
        propsEnd = i + 1
        break
      }
    }
  }

  // 在 props 范围内找各个 prop
  for (const block of blocks) {
    if (block.startIdx < propsStart || block.startIdx > propsEnd) continue
    if (block.comment.includes('@internal')) continue
    if (block.comment.includes('@deprecated')) continue

    // nextLine 应该是 prop 名: {
    const propNameMatch = block.nextLine.match(/^(\w+)\s*:\s*\{/)
    if (!propNameMatch) continue

    const name = propNameMatch[1]
    // 如果是以 _ 开头，跳过内部属性
    if (name.startsWith('_')) continue

    // 提取描述（第一行非 tag 内容，只取第一行）
    const descLines = block.comment
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s?/, '').trim())
      .filter((l) => l && !l.startsWith('@') && !l.startsWith('-'))

    const description = descLines[0] || ''

    // 提取 @default
    let defaultVal = extractTag(block.comment, 'default')

    // 提取类型：在 nextLine 后面的代码中找 type: 和 default:
    const afterBlock = content.slice(block.endIdx, propsEnd)
    const propBlock = afterBlock.match(/^\s*\w+\s*:\s*\{([\s\S]*?\n\s*\},?)/)
    let typeStr = ''

    if (propBlock) {
      const propContent = propBlock[1]
      const typeMatch = propContent.match(/^\s*type:\s*(.+?),?\s*$/m)
      if (typeMatch) {
        typeStr = resolveType(typeMatch[1].trim(), typeAliases)
      }

      if (!defaultVal) {
        const defMatch = propContent.match(/default:\s*(.+?)(?:,\s*$|\n)/m)
        if (defMatch) {
          let raw = defMatch[1].trim().replace(/,$/, '')
          // 排除箭头函数和 undefined
          if (raw === 'undefined') raw = ''
          if (raw.includes('=>')) raw = ''
          defaultVal = raw
        }
      }
    }

    props.push({
      name,
      type: typeStr,
      default: defaultVal,
      description,
    })
  }

  return props
}

// ===== Emits 解析 =====

function parseEmits(content) {
  const events = []

  // 找到 xxxEmits = { ... }
  const emitsMatch = content.match(/export\s+const\s+\w+Emits\s*=\s*\{/)
  if (!emitsMatch) return events

  const emitsStart = emitsMatch.index
  let braceCount = 0
  let emitsEnd = content.length
  let foundOpen = false
  for (let i = emitsStart; i < content.length; i++) {
    if (content[i] === '{') { braceCount++; foundOpen = true }
    if (content[i] === '}') {
      braceCount--
      if (foundOpen && braceCount === 0) { emitsEnd = i + 1; break }
    }
  }

  const emitsBody = content.slice(emitsStart, emitsEnd)
  const blocks = extractJsDocBlocks(emitsBody)

  for (const block of blocks) {
    // 提取事件名 — 可能是 'event-name': 或 eventName:
    const nameMatch = block.nextLine.match(/^'?([^':]+)'?\s*:\s*\(([^)]*)\)/)
    if (!nameMatch) {
      // 简单形式: eventName: () => true
      const simpleMatch = block.nextLine.match(/^'?([^':]+)'?\s*:\s*\(\)\s*=>/)
      if (simpleMatch) {
        const desc = block.comment
          .split('\n')
          .map((l) => l.replace(/^\s*\*\s?/, '').trim())
          .filter((l) => l && !l.startsWith('@'))
          .join(' ')
          .trim()
        events.push({ name: simpleMatch[1].trim(), params: '—', description: desc })
      }
      continue
    }

    const eventName = nameMatch[1].trim()
    const rawParams = nameMatch[2].trim()

    // 格式化参数
    const params = rawParams ? `(${rawParams})` : '—'

    // 描述
    const desc = block.comment
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s?/, '').trim())
      .filter((l) => l && !l.startsWith('@'))
      .join(' ')
      .trim()

    events.push({ name: eventName, params, description: desc })
  }

  return events
}

// ===== 块级元数据解析 =====

function parseBlockMeta(content) {
  const blocks = extractJsDocBlocks(content)

  for (const block of blocks) {
    if (!block.nextLine.match(/export\s+const\s+\w+Props\s*=/)) continue

    return {
      description: extractTag(block.comment, 'description'),
      category: extractTag(block.comment, 'category'),
      displayName: extractTag(block.comment, 'displayName'),
      example: extractExample(block.comment),
      slots: extractListTag(block.comment, 'slots'),
      exposes: extractListTag(block.comment, 'exposes'),
    }
  }

  return { description: '', category: '', displayName: '', example: '', slots: [], exposes: [] }
}

// ===== SCSS CSS 变量解析 =====

async function parseScssVars(componentName) {
  const vars = []
  try {
    const filePath = path.join(SCSS_DIR, `${componentName}.scss`)
    const content = await fs.readFile(filePath, 'utf-8')
    const lines = content.split('\n')
    let prevComment = ''

    for (const line of lines) {
      const trimmed = line.trim()

      if (trimmed.startsWith('//') && !trimmed.includes('=====')) {
        prevComment = trimmed.replace('//', '').trim()
        continue
      }

      if (trimmed.startsWith('--cp-')) {
        const varMatch = trimmed.match(/(--cp-[a-z0-9-]+)\s*:/)
        if (varMatch) {
          const inlineComment = trimmed.match(/\/\/\s*(.+)$/)
          const desc = inlineComment ? inlineComment[1].trim() : prevComment
          // 提取默认值
          const valueMatch = trimmed.match(/:\s*([^;/]+)/)
          const defaultVal = valueMatch ? valueMatch[1].trim() : ''
          vars.push({ name: varMatch[1], default: defaultVal, description: desc })
        }
      }

      if (!trimmed.startsWith('//')) prevComment = ''
    }
  } catch {
    // SCSS 不存在
  }
  return [...new Map(vars.map((v) => [v.name, v])).values()]
}

// ===== Markdown 生成 =====

function propsToTable(props) {
  if (props.length === 0) return '无 Props。\n'
  const rows = props.map((p) => {
    const type = p.type ? `\`${escMd(p.type)}\`` : '—'
    const def = p.default ? `\`${escMd(p.default)}\`` : '—'
    return `| \`${p.name}\` | ${type} | ${def} | ${escMd(p.description)} |`
  })

  return [
    '| 属性 | 类型 | 默认值 | 说明 |',
    '|------|------|--------|------|',
    ...rows,
    '',
  ].join('\n')
}

function eventsToTable(events) {
  if (events.length === 0) return ''
  const rows = events.map((e) => `| \`${e.name}\` | \`${escMd(e.params)}\` | ${escMd(e.description)} |`)

  return [
    '### 事件',
    '',
    '| 事件名 | 参数 | 说明 |',
    '|--------|------|------|',
    ...rows,
    '',
  ].join('\n')
}

function slotsToTable(slots) {
  if (slots.length === 0) return ''
  const hasDefaults = slots.some((s) => s.defaultContent)

  if (hasDefaults) {
    const rows = slots.map(
      (s) =>
        `| \`${s.name}\` | ${escMd(s.description)} | ${s.defaultContent ? `\`"${escMd(s.defaultContent)}"\`` : '—'} |`,
    )
    return ['### 插槽', '', '| 名称 | 说明 | 默认内容 |', '|------|------|----------|', ...rows, ''].join('\n')
  }

  const rows = slots.map((s) => `| \`${s.name}\` | ${escMd(s.description)} |`)
  return ['### 插槽', '', '| 名称 | 说明 |', '|------|------|', ...rows, ''].join('\n')
}

function exposesToTable(exposes) {
  if (exposes.length === 0) return ''
  const rows = exposes.map((e) => `| \`${e.name}\` | ${escMd(e.description)} |`)
  return ['### 暴露方法', '', '| 方法 | 说明 |', '|------|------|', ...rows, ''].join('\n')
}

function cssVarsToTable(vars) {
  if (vars.length === 0) return ''
  const rows = vars.map((v) => {
    const def = v.default ? `\`${escMd(v.default)}\`` : '—'
    return `| \`${v.name}\` | ${def} | ${escMd(v.description)} |`
  })
  return ['### CSS 变量', '', '| 变量 | 默认值 | 说明 |', '|------|--------|------|', ...rows, ''].join('\n')
}

function escMd(str) {
  return (str || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

let _componentTpl = null
async function getComponentTemplate() {
  if (!_componentTpl) {
    _componentTpl = await fs.readFile(path.join(TEMPLATES_DIR, 'component.md.tpl'), 'utf-8')
  }
  return _componentTpl
}

async function generateComponentMarkdown(comp) {
  let tpl = await getComponentTemplate()
  const title = comp.meta.displayName || comp.pascalName
  const desc = comp.meta.description || ''

  let exampleSection = ''
  if (comp.meta.example) {
    exampleSection = '### 示例\n\n```vue\n' + comp.meta.example + '\n```'
  }

  tpl = tpl.replace('{{DISPLAY_NAME}}', title)
  tpl = tpl.replace('{{DESCRIPTION}}', desc)
  tpl = tpl.replace('{{PROPS_TABLE}}', propsToTable(comp.allProps))
  tpl = tpl.replace('{{EVENTS_SECTION}}', eventsToTable(comp.allEvents) || '')
  tpl = tpl.replace('{{SLOTS_SECTION}}', slotsToTable(comp.meta.slots) || '')
  tpl = tpl.replace('{{EXPOSES_SECTION}}', exposesToTable(comp.meta.exposes) || '')
  tpl = tpl.replace('{{CSS_VARS_SECTION}}', cssVarsToTable(comp.allCssVars) || '')
  tpl = tpl.replace('{{EXAMPLE_SECTION}}', exampleSection)

  // Clean up consecutive blank lines from empty sections
  tpl = tpl.replace(/\n{3,}/g, '\n\n')
  return tpl
}

// ===== 组件名转换 =====

function toPascalCase(kebab) {
  return kebab
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

// ===== 主干逻辑 =====

async function main() {
  console.log('🚀 开始生成组件参考文档...')

  // 1. 收集所有组件目录
  const dirs = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true })
  const allComponentDirs = dirs
    .filter((d) => d.isDirectory() && !['utils', 'node_modules', 'dist'].includes(d.name))
    .map((d) => d.name)

  // 2. 构建合并组 (config: { 'cp-table': ['table', 'table-column'] })
  const mergedComponents = new Set()
  for (const components of Object.values(config)) {
    for (const c of components) mergedComponents.add(c)
  }

  // 3. 计算要处理的目标列表
  let targets = []
  if (onlyComponent) {
    // --only button → 查找包含 button 的合并组或独立处理
    const matchedGroup = Object.entries(config).find(([, comps]) => comps.includes(onlyComponent))
    if (matchedGroup) {
      targets.push({ name: matchedGroup[0], components: matchedGroup[1] })
    } else {
      targets.push({ name: `cp-${onlyComponent}`, components: [onlyComponent] })
    }
  } else {
    // 合并组
    for (const [groupName, components] of Object.entries(config)) {
      targets.push({ name: groupName, components })
    }
    // 独立组件
    for (const dir of allComponentDirs) {
      if (!mergedComponents.has(dir)) {
        targets.push({ name: `cp-${dir}`, components: [dir] })
      }
    }
  }

  // 4. 解析所有目标
  const categoryGroups = {} // category → [componentData]
  const warnings = []

  for (const target of targets) {
    let allProps = []
    let allEvents = []
    let allCssVars = []
    let meta = null

    for (const compName of target.components) {
      const tsPath = path.join(COMPONENTS_DIR, compName, 'src', `${compName}.ts`)
      let content = ''
      try {
        content = await fs.readFile(tsPath, 'utf-8')
      } catch {
        // 尝试没有 src/ 的路径
        try {
          const altPath = path.join(COMPONENTS_DIR, compName, `${compName}.ts`)
          content = await fs.readFile(altPath, 'utf-8')
        } catch {
          warnings.push(`⚠️  未找到 ${compName} 的 Props 定义文件`)
          continue
        }
      }

      const typeAliases = collectTypeAliases(content)
      const props = parseProps(content, typeAliases)
      const events = parseEmits(content)
      const blockMeta = parseBlockMeta(content)
      const cssVars = await parseScssVars(compName)

      // 主组件的 meta 优先
      if (!meta || (blockMeta.description && !meta.description)) {
        meta = { ...blockMeta }
      } else {
        // 合并子组件的 slots
        if (blockMeta.slots.length > 0) {
          meta.slots = [...meta.slots, ...blockMeta.slots]
        }
        if (blockMeta.exposes.length > 0) {
          meta.exposes = [...meta.exposes, ...blockMeta.exposes]
        }
      }

      // 如果是合并组中的子组件，加上子组件名称前缀
      if (target.components.length > 1 && props.length > 0) {
        const subName = `Cp${toPascalCase(compName)}`
        // 如果不是第一个组件，在 Props 前加子组件标题
        if (compName !== target.components[0]) {
          allProps.push({ name: `**${subName} Props**`, type: '', default: '', description: '', isSeparator: true })
        }
      }

      allProps = allProps.concat(props)
      allEvents = allEvents.concat(events)
      allCssVars = allCssVars.concat(cssVars)
    }

    if (!meta) meta = { description: '', category: '', displayName: '', example: '', slots: [], exposes: [] }

    const pascalName = target.components
      .map((c) => `Cp${toPascalCase(c)}`)
      .join(' / ')

    // 确定分类
    let category = meta.category || ''
    if (!category) {
      warnings.push(`⚠️  ${pascalName} 缺少 @category 标注，归入"未分类"`)
      category = '未分类'
    }

    const categoryKey = CATEGORY_MAP[category] || 'components-uncategorized'

    if (!categoryGroups[categoryKey]) {
      categoryGroups[categoryKey] = { title: category, components: [] }
    }

    categoryGroups[categoryKey].components.push({
      name: target.name,
      pascalName,
      meta,
      allProps: allProps.filter((p) => !p.isSeparator),
      allEvents,
      allCssVars,
    })
  }

  // 5. 输出分类文件
  await fs.mkdir(REFERENCES_DIR, { recursive: true })

  const categoryTitles = {}
  for (const [filename, group] of Object.entries(categoryGroups)) {
    const categoryTitle = {
      'components-basic': '基础组件属性参考',
      'components-form': '表单组件属性参考',
      'components-display': '展示组件属性参考',
      'components-navigation': '导航组件属性参考',
      'components-layout': '布局组件属性参考',
      'components-service': '服务组件属性参考',
      'components-uncategorized': '未分类组件属性参考',
    }[filename] || `${group.title}属性参考`

    categoryTitles[filename] = { title: categoryTitle, components: group.components }

    // Build component sections
    const componentSections = []
    for (const comp of group.components) {
      componentSections.push(await generateComponentMarkdown(comp))
    }

    // Read reference template and fill placeholders
    const refTpl = await fs.readFile(path.join(TEMPLATES_DIR, 'reference.md.tpl'), 'utf-8')
    let content = refTpl
      .replace('{{CATEGORY_TITLE}}', categoryTitle)
      .replace('{{COMPONENTS}}', componentSections.join('\n'))

    const outPath = path.join(REFERENCES_DIR, `${filename}.md`)

    if (onlyComponent) {
      try {
        const _existing = await fs.readFile(outPath, 'utf-8')
        console.log(`⚡ 追加到 ${filename}.md（--only 模式）`)
      } catch {
        // 文件不存在
      }
    }

    await fs.writeFile(outPath, content, 'utf-8')
    console.log(`✅ 已生成 references/${filename}.md (${group.components.length} 个组件)`)
  }

  // 6. 生成 SKILL.md 概览
  if (!onlyComponent) {
    await generateSkillOverview(categoryTitles)
  }

  // 7. 打印警告
  if (warnings.length > 0) {
    console.log('\n📋 警告:')
    for (const w of warnings) console.log(`  ${w}`)
  }

  console.log('\n🎉 文档生成完毕！')
}

async function generateSkillOverview(categoryData) {
  const categoryOrder = [
    'components-basic',
    'components-form',
    'components-display',
    'components-navigation',
    'components-layout',
    'components-service',
    'components-uncategorized',
  ]

  // Build {{COMPONENT_TABLES}}
  const tableSections = []
  for (const key of categoryOrder) {
    const data = categoryData[key]
    if (!data) continue

    tableSections.push('### ' + data.title)
    tableSections.push('')
    tableSections.push('| 组件 | 说明 |')
    tableSections.push('|------|------|')
    for (const comp of data.components) {
      const displayName = comp.meta.displayName || comp.pascalName
      const desc = comp.meta.description || ''
      tableSections.push('| ' + displayName + ' | ' + desc + ' |')
    }
    tableSections.push('')
  }

  // Build {{REFERENCE_LINKS}}
  const linkLines = []
  for (const key of categoryOrder) {
    const data = categoryData[key]
    if (!data) continue
    linkLines.push('- [' + data.title + '](references/' + key + '.md)')
  }

  // Read template and fill placeholders
  const templatePath = path.join(TEMPLATES_DIR, 'SKILL.md.tpl')
  let template = await fs.readFile(templatePath, 'utf-8')
  template = template.replace('{{COMPONENT_TABLES}}', tableSections.join('\n').trim())
  template = template.replace('{{REFERENCE_LINKS}}', linkLines.join('\n'))

  const skillPath = path.join(SKILL_DIR, 'SKILL.md')
  await fs.writeFile(skillPath, template, 'utf-8')
  console.log('✅ 已生成 SKILL.md 概览')
}

main().catch((err) => {
  console.error('❌ 发生错误:', err)
  process.exit(1)
})
