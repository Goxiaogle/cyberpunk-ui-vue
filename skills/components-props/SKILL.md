---
name: components-props
description: Cyberpunk Vue 所有组件的详细属性参考。包含每个组件的 Props、事件、插槽说明。
---

# 组件属性参考

## CpButton 按钮

赛博朋克风格按钮，支持多种颜色、变体和图标配置。

### Props

| 属性                 | 类型                                                                    | 默认值      | 说明                        |
| -------------------- | ----------------------------------------------------------------------- | ----------- | --------------------------- |
| `type`               | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型                    |
| `size`               | `'sm' \| 'md' \| 'lg' \| number \| string`                              | `'md'`      | 按钮尺寸                    |
| `variant`            | `'solid' \| 'outline' \| 'ghost' \| 'neon' \| 'semi'`                   | `'solid'`   | 按钮变体                    |
| `shape`              | `'clip' \| 'no-clip' \| 'round' \| 'circle'`                            | `'clip'`    | 形状模式                    |
| `disabled`           | `boolean`                                                               | `false`     | 是否禁用                    |
| `loading`            | `boolean`                                                               | `false`     | 是否加载中                  |
| `block`              | `boolean`                                                               | `false`     | 是否块级（占满宽度）        |
| `color`              | `string`                                                                | `''`        | 自定义颜色（覆盖 type）     |
| `textColor`          | `string`                                                                | `''`        | 自定义文字颜色              |
| `dashed`             | `boolean`                                                               | `false`     | 虚线边框（仅 outline 变体） |
| `icon`               | `Component`                                                             | -           | 图标组件（纯图标按钮）      |
| `prefixIcon`         | `Component`                                                             | -           | 前缀图标                    |
| `suffixIcon`         | `Component`                                                             | -           | 后缀图标                    |
| `iconSize`           | `string \| number`                                                      | -           | 图标尺寸                    |
| `iconColor`          | `string`                                                                | -           | 图标颜色                    |
| `loadingPlaceholder` | `boolean`                                                               | `false`     | 是否预留 loading 空间       |
| `nativeType`         | `'button' \| 'submit' \| 'reset'`                                       | `'button'`  | 原生 type 属性              |

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

<!-- 加载状态 -->
<CpButton :loading="isLoading" loading-placeholder>提交</CpButton>

<!-- 自定义颜色 -->
<CpButton color="#ff00ff" variant="neon">霓虹按钮</CpButton>

<!-- 纯图标按钮 -->
<CpButton :icon="IconSettings" shape="circle" />
```

---

## CpInput 输入框

赛博朋克风格单行文本输入框。

### Props

| 属性                  | 类型                                                            | 默认值      | 说明             |
| --------------------- | --------------------------------------------------------------- | ----------- | ---------------- |
| `v-model`             | `string \| number`                                              | `''`        | 绑定值           |
| `type`                | `'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url'` | `'text'`    | 输入类型         |
| `size`                | `'sm' \| 'md' \| 'lg' \| number \| string`                      | `'md'`      | 尺寸             |
| `shape`               | `'clip' \| 'no-clip' \| 'round'`                                | `'clip'`    | 形状             |
| `variant`             | `'outline' \| 'filled' \| 'ghost'`                              | `'outline'` | 变体             |
| `placeholder`         | `string`                                                        | `''`        | 占位文本         |
| `disabled`            | `boolean`                                                       | `false`     | 禁用             |
| `readonly`            | `boolean`                                                       | `false`     | 只读             |
| `clearable`           | `boolean`                                                       | `false`     | 可清空           |
| `maxlength`           | `number`                                                        | -           | 最大长度         |
| `showPassword`        | `boolean`                                                       | `false`     | 显示密码切换按钮 |
| `showWordLimit`       | `boolean`                                                       | `false`     | 显示字数统计     |
| `color`               | `string`                                                        | `''`        | 聚焦颜色         |
| `textColor`           | `string`                                                        | `''`        | 文字颜色         |
| `placeholderColor`    | `string`                                                        | `''`        | 占位符颜色       |
| `inactiveBorderColor` | `string`                                                        | `''`        | 未聚焦边框颜色   |
| `autofocus`           | `boolean`                                                       | `false`     | 自动聚焦         |

### 插槽

| 名称     | 说明       |
| -------- | ---------- |
| `prefix` | 输入框前缀 |
| `suffix` | 输入框后缀 |

### 事件

| 名称     | 参数             | 说明             |
| -------- | ---------------- | ---------------- |
| `input`  | `(value, event)` | 输入时触发       |
| `change` | `(value)`        | 值确认变化时触发 |
| `focus`  | `(event)`        | 获取焦点         |
| `blur`   | `(event)`        | 失去焦点         |
| `clear`  | -                | 点击清空按钮     |

### 暴露方法

| 名称       | 说明                |
| ---------- | ------------------- |
| `focus()`  | 使输入框聚焦        |
| `blur()`   | 使输入框失焦        |
| `inputRef` | 原生 input 元素引用 |

### 示例

```vue
<!-- 基础输入 -->
<CpInput v-model="username" placeholder="请输入用户名" />

<!-- 带图标 -->
<CpInput v-model="search">
  <template #prefix><CpIcon icon="mdi:magnify" /></template>
</CpInput>

<!-- 密码输入 -->
<CpInput v-model="password" type="password" show-password />

<!-- 可清空 -->
<CpInput v-model="value" clearable @clear="handleClear" />
```

---

## CpSwitch 开关

赛博朋克风格开关组件。

### Props

| 属性            | 类型                                                       | 默认值      | 说明           |
| --------------- | ---------------------------------------------------------- | ----------- | -------------- |
| `v-model`       | `boolean`                                                  | `false`     | 开关状态       |
| `size`          | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 尺寸           |
| `type`          | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色类型       |
| `disabled`      | `boolean`                                                  | `false`     | 禁用           |
| `loading`       | `boolean`                                                  | `false`     | 加载中         |
| `color`         | `string`                                                   | `''`        | 选中颜色       |
| `inactiveColor` | `string`                                                   | `''`        | 未选中颜色     |
| `activeText`    | `string`                                                   | `''`        | 选中时文字     |
| `inactiveText`  | `string`                                                   | `''`        | 未选中时文字   |
| `fitText`       | `boolean`                                                  | `false`     | 宽度适应文字   |
| `width`         | `string \| number`                                         | `''`        | 固定宽度       |
| `beforeChange`  | `() => Promise<boolean> \| boolean`                        | -           | 切换前钩子     |
| `name`          | `string`                                                   | `''`        | 原生 name 属性 |

### 事件

| 名称     | 参数               | 说明         |
| -------- | ------------------ | ------------ |
| `change` | `(value: boolean)` | 值变化时触发 |

### 示例

```vue
<!-- 基础开关 -->
<CpSwitch v-model="enabled" />

<!-- 带文字 -->
<CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />

<!-- 自定义颜色 -->
<CpSwitch v-model="enabled" color="#ff00ff" inactive-color="#333" />

<!-- 异步切换确认 -->
<CpSwitch v-model="enabled" :before-change="confirmChange" />
```

---

## CpSlider 滑块

赛博朋克风格范围选择滑块。

### Props

| 属性            | 类型                                         | 默认值   | 说明           |
| --------------- | -------------------------------------------- | -------- | -------------- |
| `v-model`       | `number \| [number, number]`                 | `0`      | 当前值         |
| `min`           | `number`                                     | `0`      | 最小值         |
| `max`           | `number`                                     | `100`    | 最大值         |
| `step`          | `number`                                     | `1`      | 步长           |
| `size`          | `'sm' \| 'md' \| 'lg' \| number \| string`   | `'md'`   | 尺寸           |
| `shape`         | `'clip' \| 'no-clip' \| 'round'`             | `'clip'` | 形状           |
| `disabled`      | `boolean`                                    | `false`  | 禁用           |
| `range`         | `boolean`                                    | `false`  | 范围选择模式   |
| `vertical`      | `boolean`                                    | `false`  | 垂直模式       |
| `height`        | `string`                                     | -        | 垂直模式高度   |
| `showTooltip`   | `boolean`                                    | `true`   | 显示数值提示   |
| `showStops`     | `boolean`                                    | `false`  | 显示刻度点     |
| `marks`         | `Record<number, string \| { label, style }>` | -        | 刻度标记       |
| `color`         | `string`                                     | `''`     | 自定义颜色     |
| `formatTooltip` | `(value: number) => string`                  | -        | 格式化提示内容 |

### 事件

| 名称     | 参数      | 说明             |
| -------- | --------- | ---------------- |
| `change` | `(value)` | 释放滑块时触发   |
| `input`  | `(value)` | 拖动过程实时触发 |

### 示例

```vue
<!-- 基础滑块 -->
<CpSlider v-model="value" />

<!-- 范围选择 -->
<CpSlider v-model="range" range />

<!-- 带刻度标记 -->
<CpSlider v-model="temp" :marks="{ 0: '0°C', 50: '50°C', 100: '100°C' }" />

<!-- 格式化提示 -->
<CpSlider v-model="percent" :format-tooltip="(v) => `${v}%`" />
```

---

## CpDropdown 下拉选择器

赛博朋克风格下拉选择组件。

### Props

| 属性          | 类型                                                         | 默认值           | 说明             |
| ------------- | ------------------------------------------------------------ | ---------------- | ---------------- |
| `v-model`     | `string \| number`                                           | `''`             | 选中值           |
| `options`     | `{ label, value, disabled? }[]`                              | `[]`             | 选项列表         |
| `placeholder` | `string`                                                     | `'请选择'`       | 占位文本         |
| `size`        | `'sm' \| 'md' \| 'lg' \| number \| string`                   | `'md'`           | 尺寸             |
| `shape`       | `'clip' \| 'no-clip' \| 'round'`                             | `'clip'`         | 形状             |
| `variant`     | `'outline' \| 'filled' \| 'ghost'`                           | `'outline'`      | 变体             |
| `disabled`    | `boolean`                                                    | `false`          | 禁用             |
| `clearable`   | `boolean`                                                    | `false`          | 可清空           |
| `filterable`  | `boolean`                                                    | `false`          | 可搜索           |
| `inline`      | `boolean`                                                    | `false`          | 行内搜索模式     |
| `color`       | `string`                                                     | `''`             | 聚焦颜色         |
| `placement`   | `'bottom' \| 'bottom-start' \| 'bottom-end' \| 'top' \| ...` | `'bottom-start'` | 弹出位置         |
| `maxHeight`   | `number`                                                     | `256`            | 下拉面板最大高度 |
| `noMatchText` | `string`                                                     | `'无匹配数据'`   | 无匹配文本       |
| `noDataText`  | `string`                                                     | `'无数据'`       | 无数据文本       |

### 插槽

| 名称      | 说明           |
| --------- | -------------- |
| `default` | 自定义选项内容 |
| `prefix`  | 触发器前缀     |
| `empty`   | 空状态         |

### 事件

| 名称            | 参数                 | 说明         |
| --------------- | -------------------- | ------------ |
| `change`        | `(value)`            | 选中值变化   |
| `clear`         | -                    | 清空时触发   |
| `focus`         | -                    | 获取焦点     |
| `blur`          | -                    | 失去焦点     |
| `visibleChange` | `(visible: boolean)` | 面板显隐变化 |

### 示例

```vue
<!-- 基础选择 -->
<CpDropdown v-model="selected" :options="options" />

<!-- 可搜索 -->
<CpDropdown v-model="selected" :options="options" filterable />

<!-- 可清空 -->
<CpDropdown v-model="selected" :options="options" clearable />
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
<!-- 颜色类型 -->
<CpTag type="primary">主要</CpTag>
<CpTag type="success">成功</CpTag>
<CpTag type="warning">警告</CpTag>

<!-- 可关闭 -->
<CpTag closable @close="handleClose">可关闭</CpTag>

<!-- 便利贴风格 -->
<CpTag variant="note" type="info">提示信息</CpTag>

<!-- 自定义颜色 -->
<CpTag color="#ff00ff">自定义</CpTag>
```

---

## CpBadge 徽章

赛博朋克风格徽章组件，用于在另一个元素上显示数字、小红点或状态标识。

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

### 插槽

| 名称      | 说明             |
| --------- | ---------------- |
| `default` | 被徽章包裹的内容 |

### 示例

```vue
<!-- 基础用法 -->
<CpBadge :value="5">
  <CpButton>消息</CpButton>
</CpBadge>

<!-- 小红点 -->
<CpBadge dot>
  <CpButton>通知</CpButton>
</CpBadge>

<!-- 最大值限制 -->
<CpBadge :value="200" :max="99">
  <CpButton>邮件</CpButton>
</CpBadge>

<!-- 最小值提示 -->
<CpBadge :value="2" :min="10">
  <CpButton>库存</CpButton>
</CpBadge>

<!-- 发光变体 -->
<CpBadge value="NEW" variant="glow" type="primary">
  <CpButton>功能</CpButton>
</CpBadge>

<!-- 自定义颜色和偏移 -->
<CpBadge :value="3" color="#ff00ff" :offset="[5, -5]">
  <CpButton>自定义</CpButton>
</CpBadge>
```

---

## CpCard 卡片

赛博朋克风格卡片容器。

### Props

| 属性                | 类型                                                                    | 默认值      | 说明                   |
| ------------------- | ----------------------------------------------------------------------- | ----------- | ---------------------- |
| `title`             | `string`                                                                | `''`        | 卡片标题               |
| `type`              | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型               |
| `variant`           | `'solid' \| 'outline' \| 'semi' \| 'ghost'`                             | `'solid'`   | 变体                   |
| `shape`             | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`    | 形状                   |
| `shadow`            | `'always' \| 'hover' \| 'never'`                                        | `'hover'`   | 阴影时机               |
| `color`             | `string`                                                                | `''`        | 自定义主题色           |
| `bgColor`           | `string`                                                                | `''`        | 自定义背景（支持渐变） |
| `borderColor`       | `string`                                                                | -           | 边框颜色               |
| `bodyPadding`       | `string`                                                                | -           | 内容区内边距           |
| `headerBorder`      | `boolean`                                                               | `true`      | 头部分隔线             |
| `footerBorder`      | `boolean`                                                               | `true`      | 底部分隔线             |
| `dividerColor`      | `string`                                                                | -           | 分隔线颜色             |
| `dimmed`            | `boolean`                                                               | `false`     | 减淡模式               |
| `hoverScale`        | `boolean`                                                               | `false`     | 悬停放大效果           |
| `triggerImageHover` | `boolean`                                                               | `false`     | 触发内部图片 hover     |

### 覆层 Props

| 属性               | 类型                                              | 默认值                 | 说明          |
| ------------------ | ------------------------------------------------- | ---------------------- | ------------- |
| `overlayAnimation` | `'slide-up' \| 'slide-down' \| 'fade' \| 'scale'` | `'slide-up'`           | 覆层动画      |
| `overlayPosition`  | `'bottom' \| 'top' \| 'center'`                   | `'bottom'`             | 覆层位置      |
| `overlayEffect`    | `'none' \| 'blur' \| 'color' \| 'blur-color'`     | `'blur-color'`         | 覆层效果      |
| `overlayColor`     | `string`                                          | `'rgba(26,26,36,0.8)'` | 覆层颜色      |
| `overlayBlur`      | `number \| string`                                | `10`                   | 模糊程度      |
| `overlayDuration`  | `number \| string`                                | `300`                  | 动画时长 (ms) |

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 卡片主体内容 |
| `header`  | 自定义头部   |
| `title`   | 仅标题区域   |
| `extra`   | 头部右侧操作 |
| `footer`  | 卡片底部     |
| `overlay` | 悬停覆层内容 |
| `action`  | 操作区域     |

### 示例

```vue
<!-- 基础卡片 -->
<CpCard title="系统信息">
  <p>卡片内容</p>
</CpCard>

<!-- 带操作按钮 -->
<CpCard title="数据面板">
  <template #extra>
    <CpButton size="sm">更多</CpButton>
  </template>
  <p>面板内容</p>
</CpCard>

<!-- 毛玻璃效果 -->
<CpCard variant="semi" shape="round">
  半透明卡片
</CpCard>

<!-- 渐变背景 -->
<CpCard bg-color="linear-gradient(135deg, #1a1a2e, #2a2a4e)">
  渐变卡片
</CpCard>
```

---

## CpProgress 进度条

赛博朋克风格进度展示组件。

### Props

| 属性            | 类型                                              | 默认值   | 说明         |
| --------------- | ------------------------------------------------- | -------- | ------------ |
| `percentage`    | `number`                                          | `0`      | 当前进度值   |
| `max`           | `number`                                          | `100`    | 最大值       |
| `type`          | `'line' \| 'circle' \| 'dashboard'`               | `'line'` | 进度条类型   |
| `size`          | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| number` | `'md'`   | 尺寸         |
| `shape`         | `'clip' \| 'no-clip' \| 'round'`                  | `'clip'` | 形状         |
| `status`        | `'success' \| 'warning' \| 'error'`               | -        | 状态         |
| `color`         | `string \| string[] \| ((percentage) => string)`  | `''`     | 自定义颜色   |
| `strokeWidth`   | `number`                                          | -        | 轨道宽度     |
| `showText`      | `boolean`                                         | `true`   | 显示文字     |
| `textInside`    | `boolean`                                         | `false`  | 文字在内部   |
| `textColor`     | `string`                                          | -        | 文字颜色     |
| `format`        | `(percentage: number) => string`                  | -        | 格式化文字   |
| `striped`       | `boolean`                                         | `false`  | 条纹效果     |
| `stripedFlow`   | `boolean`                                         | `false`  | 条纹流动     |
| `indeterminate` | `boolean`                                         | `false`  | 不确定进度   |
| `loading`       | `boolean`                                         | `false`  | 加载光波效果 |
| `steps`         | `boolean`                                         | `false`  | 分段模式     |
| `stepGap`       | `number`                                          | `2`      | 分段间距     |
| `stepColors`    | `string[]`                                        | `[]`     | 分段颜色     |

### 示例

```vue
<!-- 线性进度 -->
<CpProgress :percentage="60" />

<!-- 环形进度 -->
<CpProgress type="circle" :percentage="75" />

<!-- 条纹流动 -->
<CpProgress :percentage="50" striped striped-flow />

<!-- 不确定进度 -->
<CpProgress indeterminate />

<!-- 分段进度 -->
<CpProgress :percentage="3" :max="5" steps />

<!-- 自定义格式 -->
<CpProgress :percentage="80" :format="(v) => `${v}分`" />
```

---

## CpImage 图片

赛博朋克风格图片展示组件。

### Props

| 属性            | 类型                                                       | 默认值      | 说明             |
| --------------- | ---------------------------------------------------------- | ----------- | ---------------- |
| `src`           | `string`                                                   | `''`        | 图片地址         |
| `alt`           | `string`                                                   | `''`        | 替代文本         |
| `fit`           | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`   | 适应模式         |
| `shape`         | `'clip' \| 'no-clip' \| 'round' \| 'circle'`               | `'clip'`    | 形状             |
| `width`         | `string \| number`                                         | `''`        | 宽度             |
| `height`        | `string \| number`                                         | `''`        | 高度             |
| `lazy`          | `boolean`                                                  | `false`     | 懒加载           |
| `fallbackSrc`   | `string`                                                   | `''`        | 加载失败回退图   |
| `type`          | `'default' \| 'primary' \| ...`                            | `'primary'` | 装饰块颜色       |
| `color`         | `string`                                                   | `''`        | 自定义装饰块颜色 |
| `showDecor`     | `boolean`                                                  | `true`      | 显示装饰块       |
| `hoverable`     | `boolean`                                                  | `false`     | 悬停效果         |
| `hoverMode`     | `'scale' \| 'zoom'`                                        | `'scale'`   | 悬停模式         |
| `hoverDuration` | `number \| string`                                         | `300`       | 悬停动画时长     |
| `draggable`     | `boolean`                                                  | `false`     | 允许拖拽         |

### 事件

| 名称    | 参数      | 说明     |
| ------- | --------- | -------- |
| `load`  | `(event)` | 加载成功 |
| `error` | `(event)` | 加载失败 |

### 示例

```vue
<!-- 基础图片 -->
<CpImage src="/image.jpg" alt="示例" />

<!-- 懒加载 -->
<CpImage src="/image.jpg" lazy />

<!-- 悬停放大效果 -->
<CpImage src="/image.jpg" hoverable hover-mode="zoom" />

<!-- 圆形图片 -->
<CpImage src="/avatar.jpg" shape="circle" :width="64" :height="64" />
```

---

## CpAvatar 头像

赛博朋克风格用户头像组件。

### Props

| 属性          | 类型                                             | 默认值     | 说明     |
| ------------- | ------------------------------------------------ | ---------- | -------- |
| `src`         | `string`                                         | `''`       | 图片地址 |
| `alt`         | `string`                                         | `''`       | 替代文本 |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`     | 尺寸     |
| `shape`       | `'circle' \| 'square' \| 'clip'`                 | `'circle'` | 形状     |
| `icon`        | `Component`                                      | -          | 默认图标 |
| `fallbackSrc` | `string`                                         | `''`       | 回退图片 |
| `fit`         | `'cover' \| 'contain' \| 'fill'`                 | `'cover'`  | 适应模式 |
| `draggable`   | `boolean`                                        | `false`    | 允许拖拽 |

### 尺寸预设

| 值   | 像素 |
| ---- | ---- |
| `xs` | 24px |
| `sm` | 32px |
| `md` | 40px |
| `lg` | 48px |
| `xl` | 64px |

### 示例

```vue
<!-- 基础头像 -->
<CpAvatar src="/avatar.jpg" />

<!-- 尺寸 -->
<CpAvatar src="/avatar.jpg" size="xl" />
<CpAvatar src="/avatar.jpg" :size="80" />

<!-- 形状 -->
<CpAvatar src="/avatar.jpg" shape="square" />
<CpAvatar src="/avatar.jpg" shape="clip" />
```

---

## CpPopover 气泡弹层

气泡式弹出层组件。

### Props

| 属性        | 类型                                            | 默认值    | 说明     |
| ----------- | ----------------------------------------------- | --------- | -------- |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| ...` | `'top'`   | 弹出位置 |
| `trigger`   | `'hover' \| 'click' \| 'focus' \| 'manual'`     | `'hover'` | 触发方式 |
| `content`   | `string`                                        | `''`      | 内容文本 |
| `title`     | `string`                                        | `''`      | 标题     |
| `disabled`  | `boolean`                                       | `false`   | 禁用     |
| `offset`    | `number`                                        | `8`       | 偏移距离 |
| `showArrow` | `boolean`                                       | `true`    | 显示箭头 |

### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 触发元素 |
| `content` | 弹层内容 |

### 示例

```vue
<!-- 基础用法 -->
<CpPopover content="提示文本">
  <CpButton>悬停提示</CpButton>
</CpPopover>

<!-- 点击触发 -->
<CpPopover trigger="click" title="标题">
  <template #content>
    <p>详细内容</p>
  </template>
  <CpButton>点击弹出</CpButton>
</CpPopover>
```

---

## CpLoading 加载指示器

加载状态指示组件。

### Props

| 属性    | 类型                                       | 默认值      | 说明     |
| ------- | ------------------------------------------ | ----------- | -------- |
| `size`  | `'sm' \| 'md' \| 'lg' \| number \| string` | `'md'`      | 尺寸     |
| `type`  | `'spinner' \| 'dots' \| 'pulse'`           | `'spinner'` | 动画类型 |
| `color` | `string`                                   | `''`        | 颜色     |

### 示例

```vue
<CpLoading />
<CpLoading size="lg" type="dots" />
<CpLoading color="#ff00ff" />
```

---

## CpStatusIndicator 状态指示器

状态点/徽章组件。

### Props

| 属性    | 类型                                                       | 默认值      | 说明       |
| ------- | ---------------------------------------------------------- | ----------- | ---------- |
| `type`  | `'success' \| 'warning' \| 'error' \| 'info' \| 'default'` | `'default'` | 状态类型   |
| `size`  | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 尺寸       |
| `pulse` | `boolean`                                                  | `false`     | 脉冲动画   |
| `color` | `string`                                                   | `''`        | 自定义颜色 |

### 示例

```vue
<CpStatusIndicator type="success" />
<CpStatusIndicator type="error" pulse />
<CpStatusIndicator color="#ff00ff" />
```
