import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT_DIR, 'packages/components');
const SCSS_DIR = path.join(ROOT_DIR, 'packages/theme-chalk/src/components');

// 解析传入参数
const args = process.argv.slice(2);
let outDir = path.join(ROOT_DIR, 'skills');
let onlyComponent = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--out-dir' && args[i + 1]) {
    outDir = path.resolve(process.cwd(), args[i + 1]);
    i++;
  } else if (args[i] === '--only' && args[i + 1]) {
    onlyComponent = args[i + 1];
    i++;
  }
}

// 动态加载配置文件
let config = {};
try {
  const configModule = await import(path.join(ROOT_DIR, 'skills.config.mjs'));
  config = configModule.default || {};
} catch (_e) {
  console.log('未找到 skills.config.mjs，使用默认行为');
}

/**
 * 简单的属性解析器
 */
async function parsePropsFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const props = [];
    const emits = [];
    let componentDescription = '';
    
    // 粗略解析 Props (按 /** 注释块和 type: 匹配)
    const propBlockRegex = /\/\*\*([\s\S]*?)\*\/[\s\S]*?(\w+):\s*{[\s\S]*?type:\s*([^,]+),[\s\S]*?default:\s*([^,]+),/g;
    let match;
    while ((match = propBlockRegex.exec(content)) !== null) {
      if (match[1].includes('@deprecated')) continue;
      
      const descBlock = match[1];
      const name = match[2];
      // 提取类型：清理 as PropType<...> 和换行，保留数组 [String, Number]
      let typeDesc = match[3].replace(/as\s+PropType<([^>]+)>/, '$1').replace(/\s+/g, ' ').trim();
      if (typeDesc.startsWith('[')) typeDesc = typeDesc.replace(/\]$/, '') + ']';
      const defaultVal = match[4].replace(/\s+/g, ' ').trim();
      
      // 提取中文描述
      const descMatch = descBlock.match(/\*\s*([^@\n]+)/);
      const desc = descMatch ? descMatch[1].trim() : '';
      
      props.push(`- \`${name}\`: \`${typeDesc}\` = \`${defaultVal}\` — ${desc}`);
    }

    // 处理没有 default 但有类型的
    const propNoDefaultRegex = /\/\*\*([\s\S]*?)\*\/[\s\S]*?(\w+):\s*{[\s\S]*?type:\s*([^,]+),?[\s\S]*?}/g;
    let matchNoDef;
    while ((matchNoDef = propNoDefaultRegex.exec(content)) !== null) {
        if(matchNoDef[0].includes('default:')) continue; 
        const descBlock = matchNoDef[1];
        const name = matchNoDef[2];
        let typeDesc = matchNoDef[3].replace(/as\s+PropType<([^>]+)>/, '$1').replace(/\s+/g, ' ').trim();
        if (typeDesc.startsWith('[')) typeDesc = typeDesc.replace(/\]$/, '') + ']';
        
        const descMatch = descBlock.match(/\*\s*([^@\n]+)/);
        const desc = descMatch ? descMatch[1].trim() : '';
        props.push(`- \`${name}\`: \`${typeDesc}\` — ${desc}`);
    }

    const descMatch = content.match(/@description\s+([^\n]+)/);
    if (descMatch) {
      componentDescription = descMatch[1].trim();
    }

    return { props, emits, componentDescription };
  } catch (_e) {
    return { props: [], emits: [], componentDescription: '' };
  }
}

/**
 * 解析 index.ts 获取 Slots 和组件描述
 */
async function parseIndexFile(indexFilePath) {
    try {
        const content = await fs.readFile(indexFilePath, 'utf-8');
        const slots = [];
        const slotMatches = content.matchAll(/@slot\s+([^\s-]+)[\s-]+([^\n]+)/g);
        for (const sMatch of slotMatches) {
            slots.push(`- \`${sMatch[1]}\` — ${sMatch[2].trim()}`);
        }
        
        let desc = '';
        const descMatch = content.match(/\/\*\*\n\s*\*\s*Cp[^\n]+\n\s*\*\n\s*\*\s*([^\n]+)/);
        if (descMatch) {
            desc = descMatch[1].trim();
        }
        
        return { slots, desc };
    } catch(e) {
        return { slots: [], desc: '' };
    }
}

/**
 * 解析 SCSS 变量
 */
async function parseScssFile(name) {
  try {
    const scssPath = path.join(SCSS_DIR, `${name}.scss`);
    const content = await fs.readFile(scssPath, 'utf-8');
    const variables = [];
    
    const lines = content.split('\n');
    let currentComment = '';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // 捕获上一行的单行注释 (排除分隔线 =====)
        if (line.startsWith('//') && !line.includes('=====')) {
            currentComment = line.replace('//', '').trim();
            continue;
        }

        // 捕获 CSS 变量声明 `--cp-xxx:`
        if (line.startsWith('--cp-')) {
            const match = line.match(/(--cp-[a-z0-9-]+)\s*:/);
            if (match) {
                const inlineCommentMatch = line.match(/\/\/\s*(.+)$/);
                let comment = currentComment;
                if (inlineCommentMatch) {
                    comment = inlineCommentMatch[1].trim();
                }
                variables.push(`- \`${match[1]}\`${comment ? ` — ${comment}` : ''}`);
            }
        }
        
        if (!line.startsWith('//')) {
            currentComment = '';
        }
    }
    return [...new Set(variables)];
  } catch (_e) {
    return [];
  }
}

/**
 * 提取自带的 usage examples 或 examples.md
 */
async function getExamples(components, skillName) {
    let finalExample = '';
    
    try {
        const examplePath = path.join(outDir, skillName, 'examples.md');
        finalExample += await fs.readFile(examplePath, 'utf-8');
        finalExample += '\n\n';
    } catch(_e) {}

    try {
        const mainComp = components[0];
        const indexPath = path.join(COMPONENTS_DIR, mainComp, 'index.ts');
        const content = await fs.readFile(indexPath, 'utf-8');
        // 匹配 @example 到 @see 或 @slot 之间的代码块
        const exampleMatch = content.match(/@example\s*\n\s*\*\s*```vue([\s\S]*?)```/);
        if (exampleMatch) {
            finalExample += '```vue\n' + exampleMatch[1].replace(/\n\s*\*\s?/g, '\n').trim() + '\n```';
        }
    } catch(_e) {}

    return finalExample.trim() || "暂无示例代码。";
}

// 主干逻辑
async function main() {
  console.log(`🚀 开始生成 SKILL，输出目录: ${outDir}`);

  let targets = Object.keys(config);
  
  if (onlyComponent) {
    targets = [onlyComponent];
  } else {
    // 扫描 packages/components 目录下没有在 config 中的独立目录
    const dirs = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true });
    
    const configuredComponents = new Set();
    Object.values(config).forEach(arr => arr.forEach(c => configuredComponents.add(c)));

    dirs.forEach(dirent => {
      if (dirent.isDirectory() && 
          dirent.name !== 'utils' && 
          dirent.name !== 'node_modules' && 
          dirent.name !== 'dist' &&
          !configuredComponents.has(dirent.name)) {
        
        targets.push(`cp-${dirent.name}`);
        config[`cp-${dirent.name}`] = [dirent.name];
      }
    });
  }

  for (const skillName of targets) {
    if (!config[skillName]) config[skillName] = [skillName.replace('cp-', '')];
    const components = config[skillName];
    
    let allProps = [];
    let allSlots = [];
    let allVars = [];
    let mainDesc = '';

    for (const compName of components) {
      const srcTsPath = path.join(COMPONENTS_DIR, compName, 'src', `${compName}.ts`);
      const { props, componentDescription } = await parsePropsFile(srcTsPath);
      
      const indexPath = path.join(COMPONENTS_DIR, compName, 'index.ts');
      const { slots, desc: indexDesc } = await parseIndexFile(indexPath);
      
      if (props.length > 0) {
          allProps.push(`### Cp${compName.charAt(0).toUpperCase() + compName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())} Props\n`);
          allProps = allProps.concat(props);
          allProps.push('');
      }

      if (slots.length > 0) {
        allSlots.push(`### Cp${compName.charAt(0).toUpperCase() + compName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())} Slots\n`);
        allSlots = allSlots.concat(slots);
        allSlots.push('');
      }

      const scssVars = await parseScssFile(compName);
      if (scssVars.length > 0) {
        allVars.push(`### Cp${compName.charAt(0).toUpperCase() + compName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())} CSS Variables\n`);
        allVars = allVars.concat(scssVars);
        allVars.push('');
      }

      if (!mainDesc) {
        mainDesc = componentDescription || indexDesc;
      }
    }

    const examples = await getExamples(components, skillName);

    // 组装 Markdown
    const upperComponents = components.map(c => `Cp${c.charAt(0).toUpperCase() + c.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`);
    
    const markdown = `---
name: ${skillName}
description: ${mainDesc || `${upperComponents.join('/')} 组件属性参考`}
components: [${upperComponents.join(', ')}]
---

# ${upperComponents.join(' / ')}

> ${mainDesc || `${upperComponents.join('/')} 组件。`}

## Props

${allProps.join('\n')}

## Slots

${allSlots.length > 0 ? allSlots.join('\n') : '无插槽。'}

## CSS Variables

${allVars.length > 0 ? allVars.join('\n') : '无 CSS 变量定制。'}

## Examples

${examples}
`;

    const targetDir = path.join(outDir, skillName);
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(path.join(targetDir, 'SKILL.md'), markdown, 'utf-8');
    
    console.log(`✅ 已生成 ${skillName}/SKILL.md`);
  }

  console.log('🎉 所有 SKILL 生成完毕！');
}

main().catch(_err => {
  console.error('发生错误:', _err);
  process.exit(1);
});
