"""
批量替换 stories 目录下所有 .stories.ts 文件中的
  from '../packages/components'  或  from "../packages/components"
为
  from '@cyberpunk-vue/components'
"""

import os, re, glob

stories_dir = os.path.join(os.path.dirname(__file__), "stories")
pattern = re.compile(r"""from\s+(['"])\.\.\/packages\/components\1""")
replacement = "from '@cyberpunk-vue/components'"

changed_files = []

for filepath in glob.glob(os.path.join(stories_dir, "*.stories.ts")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = pattern.sub(replacement, content)

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        changed_files.append(os.path.basename(filepath))

if changed_files:
    print(f"✅ 已替换 {len(changed_files)} 个文件：")
    for name in sorted(changed_files):
        print(f"   - {name}")
else:
    print("ℹ️  没有找到需要替换的文件。")
