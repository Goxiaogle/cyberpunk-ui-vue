#!/usr/bin/env python3

from __future__ import annotations

import re
import sys
from pathlib import Path


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
    sections: list[dict[str, object]] = []

    for ref_file in sorted(REFERENCES_DIR.glob("*.md")):
        text = ref_file.read_text(encoding="utf-8")
        lines = text.splitlines()
        headings = []

        for index, line in enumerate(lines):
            match = re.match(r"^(#{2,6})\s+.*\b(Cp[A-Z][A-Za-z0-9]*)\b.*$", line)
            if not match:
                continue

            headings.append(
                {
                    "index": index,
                    "level": len(match.group(1)),
                    "component": match.group(2),
                }
            )

        for heading in headings:
            end_index = len(lines)
            current_level = int(heading["level"])
            current_component = str(heading["component"])

            for next_index in range(int(heading["index"]) + 1, len(lines)):
                line = lines[next_index]
                heading_match = re.match(r"^(#{2,6})\s+.*$", line)
                if not heading_match:
                    continue

                next_level = len(heading_match.group(1))
                component_match = re.search(r"\b(Cp[A-Z][A-Za-z0-9]*)\b", line)
                next_component = component_match.group(1) if component_match else ""

                if current_level == 2:
                    if next_level <= 2:
                        end_index = next_index
                        break
                    continue

                if next_level < current_level:
                    end_index = next_index
                    break

                if next_level == current_level and next_component and next_component != current_component:
                    end_index = next_index
                    break

            block = "\n".join(lines[heading["index"] : end_index]).strip()
            sections.append(
                {
                    "component": heading["component"],
                    "ref_file": ref_file,
                    "block": block,
                }
            )

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
