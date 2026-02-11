import { execSync } from 'node:child_process'

const INCREMENT_TYPES = new Set([
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease'
])

const SEMVER_RE = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z-.]+)?(?:\+[0-9A-Za-z-.]+)?$/

function printHelp() {
  console.log(`Usage:
  pnpm release [type|version] [--preid <id>] [--skip-build] [--dry-run]

Examples:
  pnpm release                 # defaults to patch
  pnpm release minor
  pnpm release major
  pnpm release 0.2.0
  pnpm release prerelease --preid beta
  pnpm release minor --dry-run
`)
}

function parseArgs(argv) {
  let target = 'patch'
  let targetSetByUser = false
  let preid = ''
  let skipBuild = false
  let dryRun = false

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]

    if (arg === '-h' || arg === '--help') {
      return { help: true }
    }

    if (arg === '--skip-build') {
      skipBuild = true
      continue
    }

    if (arg === '--dry-run') {
      dryRun = true
      continue
    }

    if (arg === '--preid') {
      preid = argv[i + 1] ?? ''
      i += 1
      continue
    }

    if (arg.startsWith('--preid=')) {
      preid = arg.slice('--preid='.length)
      continue
    }

    if (arg === '--version' || arg === '--type') {
      target = argv[i + 1] ?? ''
      targetSetByUser = true
      i += 1
      continue
    }

    if (arg.startsWith('--version=')) {
      target = arg.slice('--version='.length)
      targetSetByUser = true
      continue
    }

    if (arg.startsWith('--type=')) {
      target = arg.slice('--type='.length)
      targetSetByUser = true
      continue
    }

    if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`)
    }

    target = arg
    targetSetByUser = true
  }

  const normalizedTarget = target.startsWith('v') ? target.slice(1) : target
  const isIncrement = INCREMENT_TYPES.has(normalizedTarget)
  const isSemver = SEMVER_RE.test(normalizedTarget)

  if (targetSetByUser && !isIncrement && !isSemver) {
    throw new Error(`Invalid version target: ${target}`)
  }

  if (!targetSetByUser && preid) {
    target = 'prerelease'
  } else {
    target = normalizedTarget
  }

  if (preid && !target.startsWith('pre')) {
    throw new Error('--preid can only be used with pre* release types')
  }

  return { help: false, target, preid, skipBuild, dryRun }
}

function run(command) {
  console.log(`[release] ${command}`)
  execSync(command, { stdio: 'inherit', shell: true })
}

function main() {
  const parsed = parseArgs(process.argv.slice(2))
  if (parsed.help) {
    printHelp()
    return
  }

  if (!parsed.skipBuild) {
    run('pnpm build')
  }

  let versionCommand = `pnpm -r exec npm version ${parsed.target}`
  if (parsed.preid) {
    versionCommand += ` --preid ${parsed.preid}`
  }
  if (parsed.dryRun) {
    versionCommand += ' --no-git-tag-version'
  }
  run(versionCommand)

  let publishCommand = 'pnpm -r publish --access public --no-git-checks'
  if (parsed.dryRun) {
    publishCommand += ' --dry-run'
  }
  run(publishCommand)
}

main()
