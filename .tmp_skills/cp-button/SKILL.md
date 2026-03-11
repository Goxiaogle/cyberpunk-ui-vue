---
name: cp-button
description: 赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。
components: [CpButton]
---

# CpButton

> 赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。

## Props

### CpButton Props

- `type`: `String ButtonType` = `'default'` — 按钮颜色类型
- `size`: `[String]` = `'md'` — 按钮尺寸
- `variant`: `String ButtonVariant` = `'solid'` — 按钮变体/形态
- `dimmed`: `Boolean` = `false` — 是否为减淡模式
- `disabled`: `Boolean` = `false` — 是否禁用按钮
- `loading`: `Boolean` = `false` — 是否显示加载状态
- `block`: `Boolean` = `false` — 是否为块级按钮
- `nativeType`: `String 'button' | 'submit' | 'reset'` = `'button'` — 原生 button type 属性
- `color`: `String` = `''` — 自定义按钮颜色
- `shape`: `String 'clip' | 'no-clip' | 'round' | 'circle'` = `'clip'` — 按钮形状
- `dashed`: `Boolean` = `false` — 是否使用虚线边框
- `decoration`: `Boolean` = `true` — 是否显示装饰块 (仅在 shape="clip" 时有效)
- `loadingPlaceholder`: `Boolean` = `false` — 是否为 Loading 预留空间
- `loadingDisabled`: `Boolean` = `false` — 加载时是否同时禁用按钮
- `textColor`: `String` = `''` — 自定义文字颜色
- `icon`: `Object object` = `undefined` — 图标组件 (用于纯图标按钮)
- `square`: `Boolean` = `false` — 是否为正方形按钮
- `iconColor`: `String` = `''` — 图标颜色
- `prefixIcon`: `Object object` = `undefined` — 前缀图标组件
- `suffixIcon`: `Object object` = `undefined` — 后缀图标组件
- `prefixIconColor`: `String` = `''` — 前缀图标颜色
- `suffixIconColor`: `String` = `''` — 后缀图标颜色
- `iconSize`: `[String]` = `''` — 图标尺寸
- `prefixIconSize`: `[String]` = `''` — 前缀图标尺寸
- `suffixIconSize`: `[String]` = `''` — 后缀图标尺寸


## Slots

### CpButton Slots

- `default` — 按钮文本内容
- `prefix` — 前缀插槽，通常用于图标，加载时自动隐藏
- `suffix` — 后缀插槽，通常用于图标


## CSS Variables

### CpButton CSS Variables

- `--cp-button-clip-size`


## Examples

```vue
<CpButton type="primary">确认</CpButton>
<CpButton variant="neon" type="success">霓虹按钮</CpButton>
<CpButton :loading="isLoading" loading-placeholder>提交</CpButton>
```
