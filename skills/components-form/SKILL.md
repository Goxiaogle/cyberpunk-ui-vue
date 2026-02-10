---
name: components-form
description: 表单组件的详细属性参考：Input、InputNumber、Textarea、Switch、Slider、Dropdown、Checkbox、Radio、Segmented。
---

# 表单组件属性参考

## CpInput 输入框

赛博朋克风格单行文本输入框。

### Props

| 属性                  | 类型                                                            | 默认值      | 说明              |
| --------------------- | --------------------------------------------------------------- | ----------- | ----------------- |
| `v-model`             | `string \| number`                                              | `''`        | 绑定值            |
| `type`                | `'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url'` | `'text'`    | 输入类型          |
| `size`                | `'sm' \| 'md' \| 'lg' \| number \| string`                      | `'md'`      | 尺寸              |
| `shape`               | `'clip' \| 'no-clip' \| 'round'`                                | `'clip'`    | 形状              |
| `variant`             | `'outline' \| 'filled' \| 'ghost'`                              | `'outline'` | 变体              |
| `placeholder`         | `string`                                                        | `''`        | 占位文本          |
| `disabled`            | `boolean`                                                       | `false`     | 禁用              |
| `readonly`            | `boolean`                                                       | `false`     | 只读              |
| `clearable`           | `boolean`                                                       | `false`     | 可清空            |
| `clearDuration`       | `number`                                                        | `150`       | 清除动画时长 (ms) |
| `maxlength`           | `number`                                                        | -           | 最大长度          |
| `showPassword`        | `boolean`                                                       | `false`     | 显示密码切换按钮  |
| `showWordLimit`       | `boolean`                                                       | `false`     | 显示字数统计      |
| `color`               | `string`                                                        | `''`        | 聚焦颜色          |
| `textColor`           | `string`                                                        | `''`        | 文字颜色          |
| `placeholderColor`    | `string`                                                        | `''`        | 占位符颜色        |
| `inactiveBorderColor` | `string`                                                        | `''`        | 未聚焦边框颜色    |
| `autofocus`           | `boolean`                                                       | `false`     | 自动聚焦          |

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
<CpInput v-model="username" placeholder="请输入用户名" />
<CpInput v-model="password" type="password" show-password />
<CpInput v-model="value" clearable />
<CpInput v-model="value" clearable :clear-duration="300" />
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

### 示例

```vue
<CpSwitch v-model="enabled" />
<CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />
<CpSwitch v-model="enabled" color="#ff00ff" />
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
| `showTooltip`   | `boolean`                                    | `true`   | 显示数值提示   |
| `showStops`     | `boolean`                                    | `false`  | 显示刻度点     |
| `marks`         | `Record<number, string \| { label, style }>` | -        | 刻度标记       |
| `color`         | `string`                                     | `''`     | 自定义颜色     |
| `formatTooltip` | `(value: number) => string`                  | -        | 格式化提示内容 |

### 示例

```vue
<CpSlider v-model="value" />
<CpSlider v-model="range" range />
<CpSlider v-model="temp" :marks="{ 0: '0°C', 50: '50°C', 100: '100°C' }" />
```

---

## CpDropdown 下拉选择器

赛博朋克风格下拉选择组件。

### Props

| 属性            | 类型                                                         | 默认值           | 说明              |
| --------------- | ------------------------------------------------------------ | ---------------- | ----------------- |
| `v-model`       | `string \| number`                                           | `''`             | 选中值            |
| `options`       | `{ label, value, disabled? }[]`                              | `[]`             | 选项列表          |
| `placeholder`   | `string`                                                     | `'请选择'`       | 占位文本          |
| `size`          | `'sm' \| 'md' \| 'lg' \| number \| string`                   | `'md'`           | 尺寸              |
| `shape`         | `'clip' \| 'no-clip' \| 'round'`                             | `'clip'`         | 形状              |
| `variant`       | `'outline' \| 'filled' \| 'ghost'`                           | `'outline'`      | 变体              |
| `disabled`      | `boolean`                                                    | `false`          | 禁用              |
| `clearable`     | `boolean`                                                    | `false`          | 可清空            |
| `clearDuration` | `number`                                                     | `150`            | 清除动画时长 (ms) |
| `filterable`    | `boolean`                                                    | `false`          | 可搜索            |
| `inline`        | `boolean`                                                    | `false`          | 行内搜索模式      |
| `color`         | `string`                                                     | `''`             | 聚焦颜色          |
| `placement`     | `'bottom' \| 'bottom-start' \| 'bottom-end' \| 'top' \| ...` | `'bottom-start'` | 弹出位置          |
| `maxHeight`     | `number`                                                     | `256`            | 下拉面板最大高度  |

### 示例

```vue
<CpDropdown v-model="selected" :options="options" />
<CpDropdown v-model="selected" :options="options" filterable />
<CpDropdown v-model="selected" :options="options" clearable />
<CpDropdown
  v-model="selected"
  :options="options"
  clearable
  :clear-duration="300"
/>
```

---

## CpCheckbox 复选框

赛博朋克风格复选框，支持半选状态和分组。

### Props

| 属性            | 类型                                                       | 默认值      | 说明                        |
| --------------- | ---------------------------------------------------------- | ----------- | --------------------------- |
| `v-model`       | `boolean \| CheckboxValueType[]`                           | -           | 绑定值                      |
| `label`         | `string \| number \| boolean`                              | -           | 选项值，在 Group 中使用     |
| `trueValue`     | `string \| number \| boolean`                              | `true`      | 选中时的值（单独使用）      |
| `falseValue`    | `string \| number \| boolean`                              | `false`     | 未选中时的值（单独使用）    |
| `disabled`      | `boolean`                                                  | `false`     | 禁用                        |
| `indeterminate` | `boolean`                                                  | `false`     | 半选状态                    |
| `size`          | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 尺寸                        |
| `type`          | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色类型                    |
| `color`         | `string`                                                   | `''`        | 自定义选中颜色（覆盖 type） |
| `border`        | `boolean`                                                  | `false`     | 边框卡片模式                |

### 示例

```vue
<CpCheckbox v-model="checked">同意协议</CpCheckbox>
<CpCheckbox
  v-model="allChecked"
  :indeterminate="isIndeterminate"
>全选</CpCheckbox>
```

---

## CpCheckboxGroup 复选框组

### Props

| 属性       | 类型                                                       | 默认值      | 说明             |
| ---------- | ---------------------------------------------------------- | ----------- | ---------------- |
| `v-model`  | `(string \| number \| boolean)[]`                          | `[]`        | 选中值数组       |
| `disabled` | `boolean`                                                  | `false`     | 禁用所有子复选框 |
| `size`     | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 子复选框尺寸     |
| `type`     | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 子复选框颜色类型 |
| `min`      | `number`                                                   | -           | 最少选中数量     |
| `max`      | `number`                                                   | -           | 最多选中数量     |

### 示例

```vue
<CpCheckboxGroup v-model="selected">
  <CpCheckbox label="A">选项 A</CpCheckbox>
  <CpCheckbox label="B">选项 B</CpCheckbox>
  <CpCheckbox label="C">选项 C</CpCheckbox>
</CpCheckboxGroup>
```

---

## CpRadio 单选框

赛博朋克风格单选框，八边形指示器 + 菱形内点设计。

### Props

| 属性       | 类型                                                       | 默认值      | 说明                        |
| ---------- | ---------------------------------------------------------- | ----------- | --------------------------- |
| `v-model`  | `string \| number \| boolean`                              | -           | 绑定值                      |
| `value`    | `string \| number \| boolean`                              | -           | 此单选框对应的值            |
| `label`    | `string \| number`                                         | `''`        | 显示标签                    |
| `disabled` | `boolean`                                                  | `false`     | 禁用                        |
| `size`     | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`      | 尺寸                        |
| `type`     | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 颜色类型                    |
| `color`    | `string`                                                   | `''`        | 自定义选中颜色（覆盖 type） |
| `glow`     | `boolean`                                                  | `true`      | 霓虹辉光效果                |
| `border`   | `boolean`                                                  | `false`     | 边框卡片模式                |

### 设计亮点

- **八边形指示器** — `clip-path` 切角外框
- **菱形内点** — 选中时旋转缩放动画
- **辉光效果** — `filter: drop-shadow()` 跟随八边形轮廓，`glow` 属性控制开关

### 示例

```vue
<CpRadio v-model="picked" value="A">选项 A</CpRadio>
<CpRadio v-model="picked" value="B" :glow="false">无辉光</CpRadio>
<CpRadio v-model="picked" value="C" color="#ff00ff">自定义</CpRadio>
```

---

## CpRadioGroup 单选框组

### Props

| 属性        | 类型                                                       | 默认值         | 说明             |
| ----------- | ---------------------------------------------------------- | -------------- | ---------------- |
| `v-model`   | `string \| number \| boolean`                              | -              | 选中值           |
| `disabled`  | `boolean`                                                  | `false`        | 禁用所有子单选框 |
| `size`      | `'sm' \| 'md' \| 'lg' \| number \| string`                 | `'md'`         | 子单选框尺寸     |
| `type`      | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'`    | 子单选框颜色类型 |
| `direction` | `'horizontal' \| 'vertical'`                               | `'horizontal'` | 布局方向         |

### 示例

```vue
<CpRadioGroup v-model="picked">
  <CpRadio value="A">选项 A</CpRadio>
  <CpRadio value="B">选项 B</CpRadio>
  <CpRadio value="C">选项 C</CpRadio>
</CpRadioGroup>

<CpRadioGroup v-model="picked" direction="vertical" type="success">
  <CpRadio value="A">确认</CpRadio>
  <CpRadio value="B">取消</CpRadio>
</CpRadioGroup>
```

---

## CpSegmented 分段选择器

赛博朋克风格分段选择器，一组按钮式互斥选项，选中项带滑块高亮效果。

### Props

| 属性       | 类型                                                                    | 默认值      | 说明                    |
| ---------- | ----------------------------------------------------------------------- | ----------- | ----------------------- |
| `v-model`  | `string \| number`                                                      | —           | 绑定值                  |
| `options`  | `(string \| number \| SegmentedOption)[]`                               | `[]`        | 选项数组                |
| `type`     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设                |
| `variant`  | `'solid' \| 'outline' \| 'semi' \| 'ghost' \| 'neon'`                   | `'solid'`   | 变体样式                |
| `size`     | `'sm' \| 'md' \| 'lg' \| number \| string`                              | `'md'`      | 尺寸                    |
| `shape`    | `'clip' \| 'no-clip' \| 'round' \| 'circle'`                            | `'clip'`    | 形状模式                |
| `color`    | `string`                                                                | `''`        | 自定义主题色，覆盖 type |
| `disabled` | `boolean`                                                               | `false`     | 全局禁用                |
| `block`    | `boolean`                                                               | `false`     | 撑满父容器宽度          |

### SegmentedOption 接口

```typescript
interface SegmentedOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: Component;
}
```

### 事件

| 名称                | 参数                        | 说明         |
| ------------------- | --------------------------- | ------------ |
| `update:modelValue` | `(value: string \| number)` | v-model 绑定 |
| `change`            | `(value: string \| number)` | 值发生变化   |

### CSS 变量

| 变量                              | 默认值                     | 说明             |
| --------------------------------- | -------------------------- | ---------------- |
| `--cp-segmented-bg`               | `var(--cp-bg-elevated)`    | track 背景       |
| `--cp-segmented-border-color`     | `var(--cp-border)`         | track 边框色     |
| `--cp-segmented-padding`          | `3px`                      | track 垂直内边距 |
| `--cp-segmented-padding-x`        | `4px`                      | track 水平内边距 |
| `--cp-segmented-gap`              | `2px`                      | item 间距        |
| `--cp-segmented-height`           | `36px`                     | 组件高度         |
| `--cp-segmented-font-size`        | `var(--cp-font-size-md)`   | 字号             |
| `--cp-segmented-item-color`       | `var(--cp-text-secondary)` | item 文字色      |
| `--cp-segmented-item-hover-bg`    | `var(--cp-state-hover)`    | item hover 背景  |
| `--cp-segmented-item-padding`     | `0 12px`                   | item 内边距      |
| `--cp-segmented-indicator-bg`     | `var(--cp-surface-bright)` | 滑块背景         |
| `--cp-segmented-indicator-border` | `transparent`              | 滑块边框色       |
| `--cp-segmented-indicator-shadow` | `none`                     | 滑块辉光         |
| `--cp-segmented-indicator-offset` | `-2px`                     | 滑块水平偏移     |
| `--cp-segmented-active-color`     | `var(--cp-text-primary)`   | 选中文字色       |
| `--cp-segmented-transition`       | `0.3s cubic-bezier(...)`   | 动画时长         |

### 示例

```vue
<!-- 基础 -->
<CpSegmented v-model="active" :options="['日', '周', '月']" type="primary" />

<!-- 霓虹变体 -->
<CpSegmented
  v-model="mode"
  variant="neon"
  type="warning"
  :options="[
    { label: 'SCAN', value: 'scan' },
    { label: 'BREACH', value: 'breach' },
    { label: 'LOCKED', value: 'locked', disabled: true },
  ]"
/>

<!-- 自定义颜色 + 胶囊形状 -->
<CpSegmented
  v-model="val"
  :options="['A', 'B', 'C']"
  color="#ff00ff"
  shape="circle"
/>
```
