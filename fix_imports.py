"""
批量规范 stories 目录中的组件导入路径：
统一使用 @cyberpunk-vue/components 子路径别名。
"""

import glob
import os
import re

stories_dir = os.path.join(os.path.dirname(__file__), "stories")
pattern = re.compile(r"""from\s+(['"])\.\.\/packages\/components(\/[^'"]*)?\1""")

changed_files = []

for filepath in glob.glob(os.path.join(stories_dir, "*.stories.ts")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    def to_alias(match: re.Match[str]) -> str:
        suffix = match.group(2) or ""
        return f"from '@cyberpunk-vue/components{suffix}'"

    new_content = pattern.sub(to_alias, content)

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        changed_files.append(os.path.basename(filepath))

if changed_files:
    print(f"updated {len(changed_files)} file(s):")
    for name in sorted(changed_files):
        print(f" - {name}")
else:
    print("no changes")
