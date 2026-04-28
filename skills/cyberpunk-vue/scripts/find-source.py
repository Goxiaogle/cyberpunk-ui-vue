#!/usr/bin/env python3
"""按组件名定位 cyberpunk-vue 源码：列出 GitHub 上的源码文件，可选下载到本地目录。"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


GITHUB_OWNER = "Goxiaogle"
GITHUB_REPO = "cyberpunk-ui-vue"
DEFAULT_BRANCH = "master"
USER_AGENT = "cyberpunk-vue-find-source"
SKIP_DIRS = {"node_modules", "dist", "__tests__", "__snapshots__"}


def normalize_to_kebab(query: str) -> str:
    s = re.sub(r"^[Cc][Pp][-_]?", "", query)
    s = re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", s)
    s = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1-\2", s)
    s = s.replace("_", "-")
    return s.lower()


def auth_headers() -> dict:
    headers = {"User-Agent": USER_AGENT, "Accept": "application/vnd.github+json"}
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def github_api_get(path: str, ref: str) -> list[dict]:
    url = (
        f"https://api.github.com/repos/{GITHUB_OWNER}/{GITHUB_REPO}"
        f"/contents/{path}?ref={ref}"
    )
    req = urllib.request.Request(url, headers=auth_headers())
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data if isinstance(data, list) else [data]


def walk_github_tree(repo_path: str, ref: str) -> list[dict]:
    """递归扫描 GitHub 路径下的全部文件，返回 file 项数组。"""
    files: list[dict] = []
    items = github_api_get(repo_path, ref)
    for item in items:
        parts = item["path"].split("/")
        if any(p in SKIP_DIRS for p in parts):
            continue
        if item["type"] == "dir":
            files.extend(walk_github_tree(item["path"], ref))
        elif item["type"] == "file":
            files.append(item)
    return files


def download_file(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers=auth_headers())
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    return len(data)


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="find-source.py",
        description="定位 cyberpunk-vue 组件源码（GitHub），可选下载到本地目录。",
    )
    parser.add_argument(
        "component",
        help="组件名：CpButton / button / cp-button / image-preview 等",
    )
    parser.add_argument(
        "--download",
        "-d",
        metavar="DIR",
        help="下载源码到指定目录（保留组件目录下的子结构）",
    )
    parser.add_argument(
        "--ref",
        default=DEFAULT_BRANCH,
        help=f"分支 / tag / commit（默认: {DEFAULT_BRANCH}）",
    )
    return parser.parse_args(argv)


def main(argv: list[str]) -> int:
    args = parse_args(argv)
    target = normalize_to_kebab(args.component)
    if not target:
        print("组件名无效", file=sys.stderr)
        return 1

    repo_path = f"packages/components/{target}"
    tree_url = (
        f"https://github.com/{GITHUB_OWNER}/{GITHUB_REPO}"
        f"/tree/{args.ref}/{repo_path}"
    )

    print(f"目标组件: {repo_path}  (ref={args.ref})")
    print(f"GitHub:   {tree_url}")
    print()

    try:
        files = walk_github_tree(repo_path, args.ref)
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"未找到 GitHub 路径: {repo_path}", file=sys.stderr)
            print("请检查组件名拼写。", file=sys.stderr)
            return 3
        if e.code == 403:
            print(
                "GitHub API 速率受限（匿名 60 次/小时）。"
                "请稍后重试，或设置环境变量 GITHUB_TOKEN（5000 次/小时）。",
                file=sys.stderr,
            )
            return 4
        print(f"GitHub 请求失败: HTTP {e.code} {e.reason}", file=sys.stderr)
        return 5
    except urllib.error.URLError as e:
        print(f"网络错误: {e.reason}", file=sys.stderr)
        return 5

    if not files:
        print("目录下无可用文件。", file=sys.stderr)
        return 3

    if args.download:
        dst_root = Path(args.download).resolve()
        print(f"下载到: {dst_root}")
        for item in files:
            rel = item["path"][len(repo_path) + 1 :]
            dest = dst_root / rel
            size = download_file(item["download_url"], dest)
            print(f"  ✓ {rel}  ({size} B)")
        print(f"\n完成：共下载 {len(files)} 个文件到 {dst_root}")
        return 0

    print("源码文件 (相对组件目录)：")
    for item in files:
        rel = item["path"][len(repo_path) + 1 :]
        print(f"  {rel}")
    print()
    print("如需下载到本地，加 --download <目录>：")
    print(f"  py -3 {Path(sys.argv[0]).name} {args.component} --download <output-dir>")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
