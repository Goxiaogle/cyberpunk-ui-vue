#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


SCRIPT_DIR = Path(__file__).resolve().parent
SKILL_DIR = SCRIPT_DIR.parent
REFERENCES_DIR = SKILL_DIR / "references"


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.lower())


def strip_cp_prefix(value: str) -> str:
    return re.sub(r"^cp", "", value)


def score_candidate(component_name: str, query: str) -> int:
    normalized_component = normalize(component_name)
    normalized_query = normalize(query)
    bare_component = strip_cp_prefix(normalized_component)
    bare_query = strip_cp_prefix(normalized_query)

    if normalized_component == normalized_query or bare_component == bare_query:
        return 100

    if normalized_component.startswith(normalized_query) or bare_component.startswith(bare_query):
        return 80

    if normalized_query in normalized_component or bare_query in bare_component:
        return 60

    return 0


def collect_sections() -> list[dict[str, object]]:
    """收集组件章节。

    模板约定：组件定义只在 level-2（``##``）出现；level-3 是 Props / 示例 等子段；
    level-4+ 仅用于段内细分（如合并组的多组示例 ``#### CpXxx``），不应被当作独立组件入口。
    因此此处只扫描 ``##`` 标题，并把行内所有 ``CpXxx`` 词元都登记为可查询的别名，
    以支持形如 ``## CpImage / CpImagePreview 图片`` 的合并标题。
    """
    sections: list[dict[str, object]] = []
    component_token_re = re.compile(r"\bCp[A-Z][A-Za-z0-9]*\b")

    for ref_file in sorted(REFERENCES_DIR.glob("*.md")):
        text = ref_file.read_text(encoding="utf-8")
        lines = text.splitlines()
        headings = []

        for index, line in enumerate(lines):
            match = re.match(r"^(##)\s+(.*)$", line)
            if not match:
                continue

            components = component_token_re.findall(match.group(2))
            if not components:
                continue

            headings.append({"index": index, "components": components})

        for heading in headings:
            start = int(heading["index"])
            end_index = len(lines)
            for next_index in range(start + 1, len(lines)):
                if re.match(r"^##\s+", lines[next_index]):
                    end_index = next_index
                    break

            block = "\n".join(lines[start:end_index]).strip()
            for component in heading["components"]:
                sections.append({"component": component, "ref_file": ref_file, "block": block})

    return sections


def print_usage() -> None:
    print("用法: py -3 skills/cyberpunk-vue/scripts/find-component.py <组件名>")
    print("支持: CpButton / button / cp-button / timeline-item 等格式")


def main() -> int:
    if len(sys.argv) < 2:
        print_usage()
        return 1

    query = sys.argv[1]
    sections = collect_sections()
    matches = []

    for section in sections:
        score = score_candidate(str(section["component"]), query)
        if score <= 0:
            continue
        matches.append({**section, "score": score})

    if not matches:
        print(f'未找到与 "{query}" 匹配的组件章节。')
        return 2

    matches.sort(
        key=lambda item: (
            -int(item["score"]),
            -len(str(item["block"])),
            str(item["ref_file"]),
        )
    )

    best = matches[0]
    if int(best["score"]) < 100:
        print("未找到精确匹配，最接近的组件有：")
        seen = set()
        for item in matches:
            component = str(item["component"])
            if component in seen:
                continue
            seen.add(component)
            print(f"- {component}")
            if len(seen) >= 8:
                break
        return 0

    relative_path = Path(best["ref_file"]).relative_to(SKILL_DIR).as_posix()
    print(f"来源: {relative_path}")
    print()
    print(str(best["block"]).rstrip())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
