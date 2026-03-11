---
name: components-basic
description: 基础组件的详细属性参考：Button、Icon、Text、Tag、Badge、Spacer、Divider。
---

# 基础组件属性参考

## CpButton 按钮

赛博朋克风格按钮，支持多种颜色、变体和图标配置。

### Props

| 属性                 | 类型                                                                    | 默认值      | 说明                                                                                                |
| -------------------- | ----------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `type`               | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型                                                                                            |
| `size`               | `'sm' \| 'md' \| 'lg' \| number \| string`                              | `'md'`      | 按钮尺寸                                                                                            |
| `variant`            | `'solid' \| 'outline' \| 'ghost' \| 'neon' \| 'semi'`                   | `'solid'`   | 按钮变体                                                                                            |
| `shape`              | `'clip' \| 'no-clip' \| 'round' \| 'circle'`                            | `'clip'`    | 形状模式                                                                                            |
| `disabled`           | `boolean`                                                               | `false`     | 是否禁用                                                                                            |
| `loading`            | `boolean`                                                               | `false`     | 是否加载中                                                                                          |
| `block`              | `boolean`                                                               | `false`     | 是否块级（占满宽度）                                                                                |
| `color`              | `string`                                                                | `''`        | 自定义颜色（覆盖 type）                                                                             |
| `textColor`          | `string`                                                                | `''`        | 自定义文字颜色                                                                                      |
| `dashed`             | `boolean`                                                               | `false`     | 虚线边框（仅 outline 变体）                                                                         |
| `dimmed`             | `boolean`                                                               | `false`     | 减淡模式（默认态为 default，hover 时显示主题色）                                                    |
| `decoration`         | `boolean`                                                               | `true`      | 是否显示装饰块（仅 `shape="clip"` 有效，高度 ≤ 24px 或 `size="sm"` 时自动缩小，切角也会自适应缩小） |
| `icon`               | `Component`                                                             | -           | 图标组件（纯图标按钮）                                                                              |
| `prefixIcon`         | `Component`                                                             | -           | 前缀图标                                                                                            |
| `suffixIcon`         | `Component`                                                             | -           | 后缀图标                                                                                            |
| `iconSize`           | `string \| number`                                                      | -           | 图标尺寸                                                                                            |
| `iconColor`          | `string`                                                                | -           | 图标颜色                                                                                            |
| `loadingPlaceholder` | `boolean`                                                               | `false`     | 是否预留 loading 空间                                                                               |
| `nativeType`         | `'button' \| 'submit' \| 'reset'`                                       | `'button'`  | 原生 type 属性                                                                                      |

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 按钮文本内容 |
| `prefix`  | 前缀图标区域 |
| `suffix`  | 后缀图标区域 |

### 事件

| 名称    | 参数                  | 说明       |
| ------- | --------------------- | ---------- |
| `click` | `(event: MouseEvent)` | 点击时触发 |

### 示例

```vue
<!-- 基础按钮 -->
<CpButton type="primary">确认</CpButton>

<!-- 带图标 -->
<CpButton type="success" :prefix-icon="IconCheck">保存</CpButton>

<!-- 自定义颜色 -->
<CpButton color="#ff00ff" variant="neon">霓虹按钮</CpButton>

<!-- 纯图标按钮 -->
<CpButton :icon="IconSettings" shape="circle" />

<!-- 减淡模式：平时为 default 外观，hover 时显示主题色 -->
<CpButton dimmed type="primary">Primary</CpButton>
<CpButton dimmed type="error" variant="outline">Error</CpButton>
```

---

## CpTag 标签

赛博朋克风格标签组件。

### Props

| 属性               | 类型                                                                    | 默认值      | 说明       |
| ------------------ | ----------------------------------------------------------------------- | ----------- | ---------- |
| `type`             | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型   |
| `size`             | `'sm' \| 'md' \| 'lg' \| number \| string`                              | `'md'`      | 尺寸       |
| `variant`          | `'solid' \| 'outline' \| 'semi' \| 'note'`                              | `'solid'`   | 变体       |
| `shape`            | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`    | 形状       |
| `closable`         | `boolean`                                                               | `false`     | 可关闭     |
| `color`            | `string`                                                                | `''`        | 自定义颜色 |
| `dashed`           | `boolean`                                                               | `false`     | 虚线边框   |
| `disabled`         | `boolean`                                                               | `false`     | 禁用       |
| `selectable`       | `boolean`                                                               | `false`     | 可选中     |
| `v-model:selected` | `boolean`                                                               | `false`     | 选中状态   |

### 事件

| 名称    | 参数      | 说明         |
| ------- | --------- | ------------ |
| `close` | `(event)` | 关闭按钮点击 |
| `click` | `(event)` | 标签点击     |

### 示例

```vue
<CpTag type="primary">主要</CpTag>
<CpTag closable @close="handleClose">可关闭</CpTag>
<CpTag variant="note" type="info">便利贴</CpTag>
<CpTag color="#ff00ff">自定义</CpTag>
```

---

## CpBadge 徽章

赛博朋克风格徽章组件，用于显示数字、小红点或状态标识。

### Props

| 属性        | 类型                                                                    | 默认值      | 说明                        |
| ----------- | ----------------------------------------------------------------------- | ----------- | --------------------------- |
| `value`     | `number \| string`                                                      | `''`        | 显示内容（数字或文本）      |
| `max`       | `number`                                                                | `99`        | 最大值，超出显示 `{max}+`   |
| `min`       | `number`                                                                | -           | 最小值，低于显示 `{min}-`   |
| `dot`       | `boolean`                                                               | `false`     | 小红点模式                  |
| `hidden`    | `boolean`                                                               | `false`     | 是否隐藏                    |
| `showZero`  | `boolean`                                                               | `false`     | 值为 0 时是否显示           |
| `type`      | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'error'`   | 颜色类型                    |
| `variant`   | `'solid' \| 'outline' \| 'glow'`                                        | `'solid'`   | 变体（glow 为赛博发光风格） |
| `size`      | `'small' \| 'default' \| 'large'`                                       | `'default'` | 尺寸                        |
| `color`     | `string`                                                                | `''`        | 自定义背景色（覆盖 type）   |
| `textColor` | `string`                                                                | `''`        | 自定义文本颜色              |
| `offset`    | `[number, number]`                                                      | -           | 偏移量 `[x, y]`，单位 px    |

### 示例

```vue
<CpBadge :value="5"><CpButton>消息</CpButton></CpBadge>
<CpBadge dot><CpButton>通知</CpButton></CpBadge>
<CpBadge
  value="NEW"
  variant="glow"
  type="primary"
><CpButton>功能</CpButton></CpBadge>
```

---

## CpDivider 分割线

赛博朋克风格分割线，用于分隔内容区块。支持水平/垂直方向、文字嵌入和多种变体。

### Props

| 属性              | 类型                                                                    | 默认值         | 说明                               |
| ----------------- | ----------------------------------------------------------------------- | -------------- | ---------------------------------- |
| `direction`       | `'horizontal' \| 'vertical'`                                            | `'horizontal'` | 方向                               |
| `type`            | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'`    | 颜色类型                           |
| `color`           | `string`                                                                | `''`           | 自定义颜色（覆盖 type）            |
| `contentPosition` | `'left' \| 'center' \| 'right'`                                         | `'center'`     | 文字位置（仅水平方向）             |
| `variant`         | `'solid' \| 'gradient' \| 'glow'`                                       | `'solid'`      | 变体样式                           |
| `borderStyle`     | `'solid' \| 'dashed' \| 'dotted' \| 'double'`                           | `'solid'`      | 线条样式                           |
| `dashed`          | `boolean`                                                               | `false`        | 虚线（快捷方式，等同 borderStyle） |
| `thickness`       | `number \| string`                                                      | `1`            | 线条粗细 (px)                      |
| `glow`            | `boolean`                                                               | `false`        | 发光效果（快捷方式，等同 variant） |
| `margin`          | `number \| string`                                                      | `''`           | 间距（水平：上下，垂直：左右）     |

### 插槽

| 名称      | 说明                               |
| --------- | ---------------------------------- |
| `default` | 分割线文字内容（仅水平方向时有效） |

### 示例

```vue
<!-- 基础分割线 -->
<CpDivider />

<!-- 带文字 -->
<CpDivider>SECTION</CpDivider>
<CpDivider content-position="left">LEFT</CpDivider>

<!-- 垂直方向 -->
<span>首页</span>
<CpDivider direction="vertical" />
<span>产品</span>

<!-- 发光效果 -->
<CpDivider type="primary" variant="glow">NEON</CpDivider>

<!-- 渐变 -->
<CpDivider variant="gradient" type="success" />

<!-- 虚线 -->
<CpDivider dashed />

<!-- 自定义颜色和粗细 -->
<CpDivider color="#ff00ff" :thickness="2" />
```

---

## CpIcon 图标

统一图标组件，支持 Vue 组件、函数式组件、SVG 字符串、CSS 字体图标四种模式。

### Props

| 属性    | 类型                                                                    | 默认值      | 说明                              |
| ------- | ----------------------------------------------------------------------- | ----------- | --------------------------------- |
| `icon`  | `Component \| string`                                                   | -           | 图标来源（见下方模式说明）        |
| `size`  | `'sm' \| 'md' \| 'lg' \| number \| string`                              | `'md'`      | 尺寸（sm=16px, md=24px, lg=32px） |
| `type`  | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型                          |
| `color` | `string`                                                                | `''`        | 自定义颜色（覆盖 type）           |
| `tag`   | `'i' \| 'span' \| 'div'`                                                | `'i'`       | 渲染的 HTML 标签                  |
| `spin`  | `boolean`                                                               | `false`     | 旋转动画（适合加载图标）          |

### 图标模式

CpIcon 自动识别 `icon` prop 的类型，选择对应的渲染模式：

| 类型           | 判断条件                                    | 渲染方式                   |
| -------------- | ------------------------------------------- | -------------------------- |
| **Vue 组件**   | `typeof icon === 'object'`                  | `<component :is="icon" />` |
| **函数式组件** | `typeof icon === 'function'`                | `<component :is="icon" />` |
| **SVG 字符串** | `typeof icon === 'string'` 且以 `<svg` 开头 | `v-html` 渲染              |
| **CSS 类名**   | 其他字符串                                  | `<i :class="icon" />`      |
| **Slot**       | `icon` 未传                                 | 渲染 `default` 插槽        |

> **注意**：函数式组件（箭头函数）也被视为组件模式，例如 `() => h('svg', ...)` 可以直接作为 `icon` 传入。

### 插槽

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义图标内容 |

### 示例

```vue
<!-- Vue 组件 (unplugin-icons) -->
<CpIcon :icon="MdiHome" />

<!-- 函数式组件 -->
<CpIcon :icon="() => h('svg', { viewBox: '0 0 24 24' }, [...])" />

<!-- SVG 字符串 -->
<CpIcon icon="<svg viewBox='0 0 24 24'>...</svg>" />

<!-- 带颜色和尺寸 -->
<CpIcon :icon="MdiCheck" type="success" size="lg" />

<!-- 旋转动画 -->
<CpIcon :icon="MdiLoading" spin />
```

---

## CpText 文本

赛博朋克风格文本组件，可快速叠加下划线、方框、发光、光波、马克笔和重影等视觉效果。

### Props

| 属性                | 类型                                                                    | 默认值      | 说明                 |
| ------------------- | ----------------------------------------------------------------------- | ----------- | -------------------- |
| `type`              | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 文字颜色预设         |
| `color`             | `string`                                                                | `''`        | 自定义颜色           |
| `size`              | `'sm' \| 'md' \| 'lg' \| number`                                        | `'md'`      | 字号                 |
| `align`             | `'top' \| 'middle' \| 'bottom'`                                         | `'middle'`  | 垂直对齐             |
| `underline`         | `boolean`                                                               | `false`     | 下划线               |
| `boxed`             | `boolean`                                                               | `false`     | 方框边框             |
| `dashed`            | `boolean`                                                               | `false`     | 虚线样式             |
| `bold`              | `boolean`                                                               | `false`     | 加粗                 |
| `italic`            | `boolean`                                                               | `false`     | 斜体                 |
| `strikethrough`     | `boolean`                                                               | `false`     | 删除线               |
| `glow`              | `boolean`                                                               | `false`     | 霓虹发光             |
| `glowIntensity`     | `number`                                                                | `3`         | 发光强度             |
| `glowPulse`         | `boolean`                                                               | `false`     | 发光呼吸动画         |
| `glowPulseDuration` | `number \| string`                                                      | `1500`      | 发光呼吸动画时长     |
| `lightWave`         | `boolean`                                                               | `false`     | 光波扫射动画         |
| `lightWaveDuration` | `number \| string`                                                      | `2000`      | 光波动画时长         |
| `marker`            | `boolean`                                                               | `false`     | 马克笔高亮           |
| `markerColor`       | `string`                                                                | `''`        | 马克笔颜色           |
| `overlap`           | `boolean`                                                               | `false`     | 重影效果             |
| `overlapOffsetX`    | `number`                                                                | `2`         | 重影 X 轴偏移        |
| `overlapOffsetY`    | `number`                                                                | `2`         | 重影 Y 轴偏移        |
| `overlapColor`      | `string`                                                                | `''`        | 重影颜色             |
| `unselectable`      | `boolean`                                                               | `false`     | 禁止文本选中和复制   |

### 示例

```vue
<CpText>普通文字</CpText>
<CpText underline type="primary">主色下划线</CpText>
<CpText boxed glow type="error">告警文本</CpText>
<CpText marker type="warning">高亮标记</CpText>
<CpText overlap color="#ff00ff">重影效果</CpText>
```

---

## CpSpacer 弹性间距

弹性占位组件，用于在 Flex 容器中把左右内容自动撑开。

### Props

无。

### 示例

```vue
<div style="display: flex; align-items: center;">
  <span>左侧</span>
  <CpSpacer />
  <span>右侧</span>
</div>
```
