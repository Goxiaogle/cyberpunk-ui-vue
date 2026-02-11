import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'

async function main() {
  const root = resolve(import.meta.dirname, '..')
  const distTypesDir = resolve(root, 'dist-types')
  const distDir = resolve(root, 'dist')
  const globalTypesReference = '/// <reference path="../global.d.ts" />'

  console.log('Step 1: Generating type definitions with vue-tsc...')
  
  // Clean previous output
  if (existsSync(distTypesDir)) {
    rmSync(distTypesDir, { recursive: true })
  }

  try {
    execSync('npx vue-tsc -p tsconfig.build.json --declaration --emitDeclarationOnly', {
      cwd: root,
      stdio: 'inherit'
    })
  } catch (_error) {
    console.error('vue-tsc failed, but continuing...')
  }

  console.log('Step 2: Copying type files to dist...')
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }
  
  // Copy the main index.d.ts to dist - check nested cyberpunk-vue folder first
  let srcIndex = resolve(distTypesDir, 'cyberpunk-vue', 'index.d.ts')
  if (!existsSync(srcIndex)) {
    srcIndex = resolve(distTypesDir, 'index.d.ts')
  }
  const destIndex = resolve(distDir, 'index.d.ts')
  if (existsSync(srcIndex)) {
    // Ensure root types also include module augmentation from global.d.ts.
    const srcContent = readFileSync(srcIndex, 'utf8')
    const content = srcContent.startsWith(globalTypesReference)
      ? srcContent
      : `${globalTypesReference}\n${srcContent}`
    writeFileSync(destIndex, content, 'utf8')
    console.log(`Copied: ${srcIndex} -> ${destIndex}`)
    console.log('Injected global type reference:', globalTypesReference)

    // Verify the content
    console.log('Generated index.d.ts content:')
    console.log(content)
  } else {
    console.warn('Warning: index.d.ts not found in dist-types')
  }

  console.log('Done!')
}

main().catch(console.error)
