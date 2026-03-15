# 基础组件属性参考

## CpButton 按钮

赛博朋克风格按钮组件，支持多种颜色、尺寸、形态变体。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 按钮颜色类型 |
| `size` | `Size` | `'md'` | 按钮尺寸 |
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'neon' \| 'semi'` | `'solid'` | 按钮变体/形态 |
| `dimmed` | `boolean` | `false` | 是否为减淡模式 |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `block` | `boolean` | `false` | 是否为块级按钮 |
| `nativeType` | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生 button type 属性 |
| `color` | `string` | `''` | 自定义按钮颜色 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 按钮形状 |
| `dashed` | `boolean` | `false` | 是否使用虚线边框 |
| `decoration` | `boolean` | `true` | 是否显示装饰块 (仅在 shape="clip" 时有效) |
| `loadingPlaceholder` | `boolean` | `false` | 是否为 Loading 预留空间 |
| `loadingDisabled` | `boolean` | `false` | 加载时是否同时禁用按钮 |
| `textColor` | `string` | `''` | 自定义文字颜色 |
| `icon` | `IconValue` | `undefined` | 图标组件 (用于纯图标按钮) |
| `square` | `boolean` | `false` | 是否为正方形按钮 |
| `iconColor` | `string` | `''` | 图标颜色 |
| `prefixIcon` | `IconValue` | `undefined` | 前缀图标组件 |
| `suffixIcon` | `IconValue` | `undefined` | 后缀图标组件 |
| `prefixIconColor` | `string` | `''` | 前缀图标颜色 |
| `suffixIconColor` | `string` | `''` | 后缀图标颜色 |
| `iconSize` | `Size` | `''` | 图标尺寸 |
| `prefixIconSize` | `Size` | `''` | 前缀图标尺寸 |
| `suffixIconSize` | `Size` | `''` | 后缀图标尺寸 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `click` | `(evt: MouseEvent)` | 点击按钮时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 按钮文本内容 |
| `prefix` | 前缀图标插槽，加载时自动隐藏 |
| `suffix` | 后缀图标插槽 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-button-clip-size` | `8px` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpButton type="primary">确认</CpButton>

<!-- 带图标 -->
<CpButton type="success">
  <template #prefix><CpIcon icon="mdi:check" /></template>
  保存
</CpButton>

<!-- 加载状态 -->
<CpButton :loading="isLoading" loading-placeholder>提交</CpButton>

<!-- 自定义颜色 -->
<CpButton color="#ff00ff">自定义</CpButton>
```

---

## CpConfigProvider 全局配置

全局配置提供者组件，用于设置组件库的全局默认值和主题。
通常放在应用根组件中，包裹所有子组件。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `defaults` | `Record<string, Record<string, any>>` | `{}` | 组件默认值配置 |
| `theme` | `ThemeType` | `'dark'` | 主题设置 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 被配置包裹的子组件 |

### 示例

```vue
<template>
  <CpConfigProvider
    :defaults="{
      button: { size: 'lg', variant: 'neon' },
      input: { variant: 'filled' }
    }"
    theme="dark"
  >
    <App />
  </CpConfigProvider>
</template>
```

---

## CpDivider 分割线

赛博朋克风格分割线组件，用于分隔内容区块。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 分割线方向 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 分割线类型（颜色预设） |
| `color` | `string` | `''` | 自定义颜色 |
| `contentPosition` | `'left' \| 'center' \| 'right'` | `'center'` | 文字内容位置（仅水平方向有效） |
| `variant` | `'solid' \| 'gradient' \| 'glow'` | `'solid'` | 分割线变体 |
| `borderStyle` | `'solid' \| 'dashed' \| 'dotted' \| 'double'` | `'solid'` | 线条样式 |
| `dashed` | `boolean` | `false` | 虚线（快捷方式，等同于 borderStyle="dashed"） |
| `thickness` | `number \| string` | `1` | 线条粗细 (px) |
| `glow` | `boolean` | `false` | 发光效果（快捷方式，等同于 variant="glow"） |
| `margin` | `number \| string` | `''` | 上下间距（水平方向）或左右间距（垂直方向） |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-divider-color` | `var(--cp-color-info)` |  |
| `--cp-divider-thickness` | `3px` |  |
| `--cp-divider-margin` | `16px` |  |
| `--cp-divider-text-padding` | `16px` |  |
| `--cp-divider-text-color` | `var(--cp-color-info)` |  |
| `--cp-divider-text-bg` | `var(--cp-bg-base)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpDivider />

<!-- 带文字 -->
<CpDivider>SECTION</CpDivider>

<!-- 垂直方向 -->
<CpDivider direction="vertical" />

<!-- 发光效果 -->
<CpDivider type="primary" variant="glow" />
```

---

## CpIcon 图标

统一图标组件，支持多种图标来源：Vue 组件、原始 SVG、Iconify 图标名。
自动处理 SVG 尺寸归一化，保证图标在不同来源下表现一致。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `icon` | `Component \| ((...args: unknown[]) => unknown) \| string` | — | 图标来源 |
| `size` | `IconSize \| string \| number` | `'md'` | 图标尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 图标颜色类型 |
| `color` | `string` | `''` | 自定义图标颜色 |
| `tag` | `'i' \| 'span' \| 'div'` | `'i'` | 渲染的 HTML 标签 |
| `spin` | `boolean` | `false` | 是否启用旋转动画 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 可用于传入自定义 SVG 内容 |

### 示例

```vue
<!-- 使用 Iconify 图标名 (需配合 unplugin-icons) -->
<CpIcon icon="mdi:home" />

<!-- 使用 Vue 组件 -->
<CpIcon :icon="MyIconComponent" />

<!-- 使用原始 SVG -->
<CpIcon icon="<svg>...</svg>" />

<!-- 带颜色和尺寸 -->
<CpIcon icon="mdi:check" type="success" size="lg" />

<!-- 旋转动画 (适合加载图标) -->
<CpIcon icon="mdi:loading" spin />
```

---

## CpLoading 加载

赛博朋克风格加载器组件，环形 SVG 动画效果。
可用于按钮内置加载、页面加载、异步操作等场景。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 加载器颜色类型 |
| `size` | `Size` | `'md'` | 加载器尺寸 |
| `color` | `string` | `''` | 自定义颜色 |
| `strokeWidth` | `number` | `4` | SVG 描边宽度 |
| `variant` | `'circular' \| 'spinner' \| 'spinner-solid'` | `'circular'` | 加载器变体 |

### 示例

```vue
<!-- 基础用法 -->
<CpLoading />

<!-- 带颜色 -->
<CpLoading type="primary" size="lg" />

<!-- 自定义颜色和描边 -->
<CpLoading color="#ff00ff" :stroke-width="2" />
```

---

## CpSpacer 间距

间距组件，用于快速在元素之间添加间距

### Props

无 Props。

---

## CpText 文字

赛博朋克风格特殊文字组件，可快速为文字添加多种视觉效果。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 文字类型（颜色预设） |
| `color` | `string` | `''` | 自定义颜色 |
| `size` | `'sm' \| 'md' \| 'lg' \| number` | `'md'` | 文字尺寸 |
| `align` | `'top' \| 'middle' \| 'bottom'` | `'middle'` | 垂直对齐方式 |
| `underline` | `boolean` | `false` | 下划线效果 |
| `boxed` | `boolean` | `false` | 方框边框效果 |
| `dashed` | `boolean` | `false` | 虚线样式 |
| `bold` | `boolean` | `false` | 加粗效果 |
| `italic` | `boolean` | `false` | 斜体效果 |
| `strikethrough` | `boolean` | `false` | 删除线效果 |
| `glow` | `boolean` | `false` | 发光效果 |
| `glowIntensity` | `number` | `3` | 发光强度 |
| `glowPulse` | `boolean` | `false` | 发光心跳动画 |
| `lightWave` | `boolean` | `false` | 光波扫射动画 |
| `lightWaveDuration` | `DurationValue` | `2000` | 光波动画时长 |
| `marker` | `boolean` | `false` | 马克笔背景效果 |
| `markerColor` | `string` | `''` | 马克笔自定义颜色 |
| `glowPulseDuration` | `DurationValue` | `1500` | 发光心跳动画时长 |
| `overlap` | `boolean` | `false` | 重叠文字效果 |
| `overlapOffsetX` | `number` | `2` | 重叠文字 X 轴偏移量 (px) |
| `overlapOffsetY` | `number` | `2` | 重叠文字 Y 轴偏移量 (px) |
| `overlapColor` | `string` | `''` | 重叠文字颜色 |
| `unselectable` | `boolean` | `false` | 禁止选中/复制 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-text-color` | `inherit` | CSS 变量默认值 |
| `--cp-text-glow-intensity` | `3px` | 默认强度 |
| `--cp-text-pulse-duration` | `1.5s` |  |
| `--cp-text-wave-duration` | `2s` | 默认时长 |
| `--cp-text-marker-color` | `var(--cp-text-color)` | 默认使用文字颜色 |
| `--cp-text-overlap-offset-x` | `2px` |  |
| `--cp-text-overlap-offset-y` | `2px` |  |
| `--cp-text-overlap-color` | `color-mix(` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpText>普通文字</CpText>

<!-- 带效果 -->
<CpText underline type="primary">下划线</CpText>
<CpText boxed glow type="error">方框发光</CpText>
<CpText marker type="warning">马克笔效果</CpText>

<!-- 组合效果 -->
<CpText bold italic underline>加粗斜体下划线</CpText>
```

---

