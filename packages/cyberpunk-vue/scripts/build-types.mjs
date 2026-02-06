import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, rmSync } from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'

async function main() {
  const root = resolve(import.meta.dirname, '..')
  const distTypesDir = resolve(root, 'dist-types')
  const distDir = resolve(root, 'dist')

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
  } catch (e) {
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
    // Read and copy, no path rewriting needed - dependencies will be resolved via node_modules
    cpSync(srcIndex, destIndex)
    console.log(`Copied: ${srcIndex} -> ${destIndex}`)
    
    // Verify the content
    const content = readFileSync(destIndex, 'utf8')
    console.log('Generated index.d.ts content:')
    console.log(content)
  } else {
    console.warn('Warning: index.d.ts not found in dist-types')
  }

  console.log('Done!')
}

main().catch(console.error)
