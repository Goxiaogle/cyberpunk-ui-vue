---
name: cyberpunk-vue
description: Cyberpunk Vue 组件库参考文档，赛博朋克风格 Vue 3 组件。在开发中如需使用 UI 组件，必须优先查阅本文档并使用已有的 Cyberpunk Vue 组件（如 CpButton、CpDialog、CpTable 等），而非自行实现或引入第三方组件。如果所需组件在本库中不存在，必须通知用户，由用户决定是否新建组件或采用其他方案。
---

# Cyberpunk Vue 组件库

> 赛博朋克风格的 Vue 3 组件库，提供丰富的 UI 组件。

## 使用流程（必读）

任何涉及 UI 组件的开发任务，都**必须**按以下流程执行：

1. **先查清单**：在下方"组件清单"中确认目标组件是否存在。
2. **再查 API**：通过 `find-component.py` 脚本查询组件的 props / 事件 / 插槽 / 用法。
3. **不存在则上报**：清单里没有的组件，立即告知用户由用户决定，不要自行实现或引入第三方组件。

> ⚠️ **禁止**直接 Read 或 Grep `skills/cyberpunk-vue/references/` 下的 md 文件。这些文件体积大、包含大量噪声，脚本会精准截取相关组件段落，是查询 API 的**唯一入口**。组件清单里的一句话描述也只用于"判断组件是否存在"，**不能**当作 API 依据。

### API 快查脚本

```shell
py -3 skills/cyberpunk-vue/scripts/find-component.py <组件名>
```

示例：

```shell
py -3 skills/cyberpunk-vue/scripts/find-component.py CpButton
py -3 skills/cyberpunk-vue/scripts/find-component.py dialog    # 支持模糊匹配，可省略 Cp 前缀
```

遇到任何具体使用问题（属性名、默认值、事件签名、插槽等），都先跑这个脚本，**不要凭记忆作答**。

### 源码快查脚本

当 API 文档不足以判断组件实现细节（例如内部 DOM 结构、CSS 变量、边缘行为）时，用此脚本通过 GitHub Contents API 查询并下载源码（仓库 [Goxiaogle/cyberpunk-ui-vue](https://github.com/Goxiaogle/cyberpunk-ui-vue)，开源 MIT）：

```shell
# 列出组件源码文件
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton

# 下载源码到本地目录（保留 src/ 子结构），随后用 Read 查阅
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton --download .tmp/cp-button

# 指定分支 / tag / commit
py -3 skills/cyberpunk-vue/scripts/find-source.py CpButton --ref v1.12.6
```

匿名调用受 GitHub 限制（60 次/小时）。如频繁触发限流，设置环境变量 `GITHUB_TOKEN` 即可放宽到 5000 次/小时。源码用于辅助理解，**不要**据此修改 `node_modules` 内的依赖代码。

## 组件清单

> 仅用于确认组件是否存在。具体用法一律走上面的快查脚本。

{{COMPONENT_TABLES}}
