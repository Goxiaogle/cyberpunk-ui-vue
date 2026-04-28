#!/usr/bin/env python3
"""按组件名定位 cyberpunk-vue 源码：输出本地相对路径与 GitHub 链接。"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


SCRIPT_DIR = Path(__file__).resolve().parent
GITHUB_FALLBACK = "https://github.com/Goxiaogle/cyberpunk-ui-vue"
DEFAULT_BRANCH = "master"
SKIP_DIRS = {"node_modules", "dist", "__tests__", "__snapshots__"}


def find_repo_root() -> Path | None:
    current = SCRIPT_DIR
    for _ in range(10):
        if (current / "packages" / "components").is_dir():
            return current
        if current.parent == current:
            break
        current = current.parent
    return None


def normalize_to_kebab(query: str) -> str:
    s = re.sub(r"^[Cc][Pp][-_]?", "", query)
    s = re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", s)
    s = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1-\2", s)
    s = s.replace("_", "-")
    return s.lower()


def get_repo_url(repo_root: Path | None) -> str:
    if repo_root is None:
        return GITHUB_FALLBACK
    pkg_path = repo_root / "package.json"
    if not pkg_path.is_file():
        return GITHUB_FALLBACK
    try:
        data = json.loads(pkg_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return GITHUB_FALLBACK

    repo = data.get("repository")
    url = repo.get("url") if isinstance(repo, dict) else repo
    if not isinstance(url, str):
        url = data.get("homepage")
    if not isinstance(url, str):
        return GITHUB_FALLBACK

    url = re.sub(r"^git\+", "", url)
    url = re.sub(r"\.git$", "", url)
    url = re.sub(r"#.*$", "", url)
    return url


def list_source_files(component_dir: Path) -> list[Path]:
    files: list[Path] = []
    for path in sorted(component_dir.rglob("*")):
        if not path.is_file():
            continue
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        files.append(path)
    return files


def fuzzy_candidates(components_dir: Path, target: str) -> list[str]:
    if not components_dir.is_dir():
        return []
    names = sorted(p.name for p in components_dir.iterdir() if p.is_dir())
    return [n for n in names if target and (target in n or n in target)]


def print_usage() -> None:
    print("用法: py -3 skills/cyberpunk-vue/scripts/find-source.py <组件名>")
    print("支持: CpButton / button / cp-button / image-preview 等格式")


def main() -> int:
    if len(sys.argv) < 2:
        print_usage()
        return 1

    query = sys.argv[1]
    target = normalize_to_kebab(query)
    if not target:
        print_usage()
        return 1

    repo_root = find_repo_root()
    repo_url = get_repo_url(repo_root)
    rel_dir = f"packages/components/{target}"
    github_dir = f"{repo_url}/tree/{DEFAULT_BRANCH}/{rel_dir}"

    print(f"目标组件目录: {rel_dir}")

    if repo_root is None:
        print("（脚本未在 cyberpunk-vue 仓库内运行；仅输出 GitHub 链接）")
        print(f"GitHub: {github_dir}")
        return 0

    component_dir = repo_root / "packages" / "components" / target
    if not component_dir.is_dir():
        print(f'未找到本地目录: {rel_dir}')
        fuzzy = fuzzy_candidates(repo_root / "packages" / "components", target)
        if fuzzy:
            print("最接近的目录:")
            for name in fuzzy[:8]:
                print(f"  - packages/components/{name}")
        else:
            print(f"GitHub 备用链接: {github_dir}")
        return 3

    print(f"GitHub:      {github_dir}")
    print()
    print("源码文件 (相对仓库根)：")
    for path in list_source_files(component_dir):
        rel = path.relative_to(repo_root).as_posix()
        print(f"  {rel}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
