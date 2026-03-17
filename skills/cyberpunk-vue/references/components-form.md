# 表单组件属性参考

## CpForm 表单

表单容器，提供表单布局（label 位置、行内模式）、验证管理和全局配置注入

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `model` | `Record<string, unknown` | — | 表单数据对象 |
| `rules` | `Record<string, FormRule \| FormRule[]>` | — | 验证规则 |
| `labelWidth` | `string \| number` | `'auto'` | 标签宽度 |
| `labelPosition` | `'left' \| 'right' \| 'top'` | `'right'` | 标签位置 |
| `labelSuffix` | `string` | `''` | 标签后缀（如 ':'） |
| `size` | `Size` | `'md'` | 控件尺寸 |
| `disabled` | `boolean` | `false` | 全局禁用 |
| `showMessage` | `boolean` | `true` | 全局：是否显示验证错误信息 |
| `reserveErrorSpace` | `boolean` | `false` | 全局：是否预留错误信息占位高度 |
| `inline` | `boolean` | `false` | 行内表单模式 |
| `requireAsteriskPosition` | `'left' \| 'right'` | `'left'` | 必填星号位置 |
| `labelVerticalAlign` | `'center' \| 'top' \| 'bottom' \| 'auto'` | `'center'` | 标签垂直对齐方式（仅在 labelPosition 为 left / right 时生效） |
| `label` | `string` | `''` | 标签文本 |
| `prop` | `string` | `''` | 对应 Form model 中的字段名 |
| `required` | `boolean` | `false` | 是否必填（显示星号标记） |
| `rules` | `FormRule \| FormRule[]` | — | 单项验证规则（覆盖 Form 级规则） |
| `labelWidth` | `string \| number` | — | 覆盖 Form 的 labelWidth |
| `showMessage` | `boolean` | — | 独立控制是否显示错误信息 |
| `reserveErrorSpace` | `boolean` | — | 独立控制是否预留错误信息占位高度 |
| `error` | `string` | `''` | 手动设置错误信息 |
| `size` | `Size` | — | 覆盖 Form 的 size |
| `labelVerticalAlign` | `LabelVerticalAlign` | — | 覆盖 Form 的 labelVerticalAlign |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-form-label-font-size` | `var(--cp-font-size-lg)` |  |

### 示例

```vue
<CpForm :model="formData" :rules="rules" label-position="right">
  <CpFormItem label="用户名" prop="username" required>
    <CpInput v-model="formData.username" />
  </CpFormItem>
</CpForm>
```

---

## CpInput 输入框

赛博朋克风格输入框组件，支持多种尺寸、形态变体、可清空功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | `''` | 绑定值 (v-model) |
| `type` | `'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url'` | `'text'` | 输入类型 |
| `size` | `Size` | `'md'` | 输入框尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 输入框形状 |
| `variant` | `'outline' \| 'filled' \| 'ghost'` | `'outline'` | 输入框变体 |
| `placeholder` | `string` | `''` | 占位文本 |
| `disabled` | `boolean` | `false` | 是否禁用输入框 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `clearable` | `boolean` | `false` | 是否可清空 |
| `color` | `string` | `''` | 自定义聚焦颜色 |
| `maxlength` | `number` | `undefined (无限制)` | 最大输入长度限制 |
| `autofocus` | `boolean` | `false` | 是否自动获取焦点 |
| `showPassword` | `boolean` | `false` | 是否显示密码切换按钮 |
| `showWordLimit` | `boolean` | `false` | 是否显示字数统计 |
| `inactiveBorderColor` | `string` | `''` | 未聚焦状态边框颜色 |
| `placeholderColor` | `string` | `''` | Placeholder 文字颜色 |
| `textColor` | `string` | `''` | 文字颜色 |
| `clearDuration` | `number` | `150` | 清除动画持续时间 (ms) |
| `modelValue` | `number` | `0` | 绑定值 (v-model) |
| `min` | `number` | `-Infinity` | 最小值 |
| `max` | `number` | `Infinity` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `precision` | `number` | — | 精度 (小数位数) |
| `size` | `Size` | `'md'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `placeholder` | `string` | `''` | 占位文本 |
| `color` | `string` | `''` | 自定义颜色 |
| `controls` | `boolean` | `true` | 是否使用控制按钮 |
| `controlsPosition` | `'right' \| 'both'` | `'both'` | 控制按钮位置 |
| `modelValue` | `string` | `''` | 绑定值 (v-model) |
| `placeholder` | `string` | `''` | 占位文本 |
| `size` | `Size` | `'md'` | 尺寸 |
| `variant` | `'outline' \| 'filled'` | `'outline'` | 形态变体 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `maxlength` | `number` | — | 最大输入长度 |
| `showWordLimit` | `boolean` | `false` | 显示字数统计 |
| `rows` | `number` | `3` | 行数 |
| `autosize` | `boolean \| { minRows?: number; maxRows?: number }` | `false` | 自适应高度 |
| `color` | `string` | `''` | 自定义颜色 |
| `textColor` | `string` | `''` | 文字颜色 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `input` | `(value: string \| number, event: Event)` | 输入时触发 |
| `change` | `(value: string \| number)` | 值确认变化时触发 仅在失去焦点且值有变化时触发 |
| `focus` | `(event: FocusEvent)` | 获取焦点时触发 |
| `blur` | `(event: FocusEvent)` | 失去焦点时触发 |
| `clear` | `—` | 点击清空按钮时触发 触发后 modelValue 会被设为空字符串 |

### 插槽

| 名称 | 说明 |
|------|------|
| `prefix` | 输入框前缀，常用于放置图标 |
| `suffix` | 输入框后缀，常用于放置图标或按钮 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `focus()` | 使输入框获取焦点 |
| `blur()` | 使输入框失去焦点 |
| `inputRef` | 原生 input 元素引用 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-icon-size` | `1em` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpInput v-model="value" placeholder="请输入" />

<!-- 带图标 -->
<CpInput v-model="search">
  <template #prefix><CpIcon icon="mdi:magnify" /></template>
</CpInput>

<!-- 可清空 -->
<CpInput v-model="value" clearable @clear="onClear" />

<!-- 密码输入 -->
<CpInput v-model="password" type="password" />
```

---

## CpCheckbox 复选框

赛博朋克风格复选框组件，支持半选状态、分组、自定义颜色。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `CheckboxValueType \| CheckboxValueType[]` | — | 绑定值 (v-model) |
| `label` | `string \| number \| boolean` | — | 选项值，在 CheckboxGroup 中使用 |
| `trueValue` | `string \| number \| boolean` | `true` | 选中时的值（仅单独使用时有效） |
| `falseValue` | `string \| number \| boolean` | `false` | 未选中时的值（仅单独使用时有效） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `indeterminate` | `boolean` | `false` | 是否半选（indeterminate）状态 |
| `size` | `Size` | `'md'` | 复选框尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 复选框类型（颜色预设） |
| `color` | `string` | `''` | 自定义选中颜色 |
| `checkColor` | `string` | `''` | 自定义勾选标记（√）颜色 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 复选框形状 |
| `border` | `boolean` | `false` | 是否使用边框样式 |
| `name` | `string` | `''` | 原生 name 属性 |
| `modelValue` | `CheckboxValueType[]` | — | 绑定值数组 (v-model) |
| `disabled` | `boolean` | `false` | 是否禁用所有子复选框 |
| `size` | `Size` | `'md'` | 子复选框尺寸 |
| `type` | `CheckboxType` | `'primary'` | 子复选框类型（颜色预设） |
| `shape` | `CheckboxShape` | `'clip'` | 子复选框形状 |
| `min` | `number` | — | 最少选中数量 |
| `max` | `number` | — | 最多选中数量 |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: CheckboxValueType \| CheckboxValueType[])` | 值变化时触发 |
| `change` | `(value: CheckboxValueType[])` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-checkbox-active-color` | `var(--cp-color-primary)` | CSS 变量 |
| `--cp-checkbox-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-checkbox-check-color` | `var(--cp-color-primary-text)` |  |
| `--cp-checkbox-size` | `#{$size}` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpCheckbox v-model="checked">选项</CpCheckbox>

<!-- 半选状态 -->
<CpCheckbox v-model="checked" indeterminate>全选</CpCheckbox>

<!-- 分组使用 -->
<CpCheckboxGroup v-model="selected">
  <CpCheckbox label="A">选项 A</CpCheckbox>
  <CpCheckbox label="B">选项 B</CpCheckbox>
</CpCheckboxGroup>
```

---

## CpRadio 单选框

赛博朋克风格单选框组件，支持分组、自定义颜色、多种尺寸。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number \| boolean` | — | 绑定值 (v-model) |
| `value` | `string \| number \| boolean` | — | 此单选框对应的值 |
| `label` | `string \| number` | `''` | 显示标签（也作为默认 slot fallback） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `size` | `Size` | `'md'` | 单选框尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 单选框类型（颜色预设） |
| `color` | `string` | `''` | 自定义选中颜色 |
| `glow` | `boolean` | `true` | 是否启用霓虹辉光效果 |
| `dotColor` | `string` | `''` | 自定义中间装饰块（菱形点）颜色 |
| `border` | `boolean` | `false` | 是否使用边框样式 |
| `name` | `string` | `''` | 原生 name 属性 |
| `modelValue` | `RadioValueType` | — | 绑定值 (v-model) |
| `disabled` | `boolean` | `false` | 是否禁用所有子单选框 |
| `size` | `Size` | `'md'` | 子单选框尺寸 |
| `type` | `RadioType` | `'primary'` | 子单选框类型（颜色预设） |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 布局方向 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: RadioValueType)` | 值变化时触发 |
| `change` | `(value: RadioValueType)` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-radio-active-color` | `var(--cp-color-primary)` | CSS 变量默认值 |
| `--cp-radio-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-radio-dot-color` | `var(--cp-color-primary-text)` |  |
| `--cp-radio-size` | `#{map.get($size-config, size)}` |  |
| `--cp-radio-dot-size` | `#{map.get($size-config, dot-size)}` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpRadio v-model="picked" value="A">选项 A</CpRadio>

<!-- 分组使用 -->
<CpRadioGroup v-model="picked">
  <CpRadio value="A">选项 A</CpRadio>
  <CpRadio value="B">选项 B</CpRadio>
</CpRadioGroup>
```

---

## CpDropdown 下拉选择

赛博朋克风格下拉选择器，支持多种尺寸、形态变体、可搜索/可清空功能。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | `''` | 绑定值 (v-model) |
| `options` | `DropdownOption[]` | `[]` | 选项列表 |
| `placeholder` | `string` | `'请选择'` | 占位文本 |
| `filterPlaceholder` | `string` | `'搜索...'` | 搜索框占位文本 (仅在面板开启搜索时有效) |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `clearable` | `boolean` | `false` | 是否可清空 |
| `filterable` | `boolean` | `false` | 是否可搜索过滤 |
| `size` | `Size` | `'md'` | 下拉框尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 下拉框形状 |
| `variant` | `'outline' \| 'filled' \| 'ghost'` | `'outline'` | 下拉框变体 |
| `color` | `string` | `''` | 自定义聚焦颜色 |
| `inactiveColor` | `string` | `''` | 未激活状态边框颜色 |
| `placeholderColor` | `string` | `''` | Placeholder 文字颜色 |
| `inline` | `boolean` | `false` | 是否启用行内搜索 (直接在触发器输入) |
| `placement` | `'bottom' \| 'bottom-start' \| 'bottom-end' \| 'top' \| 'top-start' \| 'top-end'` | `'bottom-start'` | 弹出位置 |
| `teleportTo` | `string \| HTMLElement` | `'body'` | Teleport 目标 |
| `maxHeight` | `number` | `256` | 下拉面板最大高度 (px) |
| `noMatchText` | `string` | `'无匹配数据'` | 无匹配时的文本 |
| `noDataText` | `string` | `'无数据'` | 无数据时的文本 |
| `clearDuration` | `number` | `150` | 清除动画持续时间 (ms) |
| `width` | `string \| number` | `''` | 下拉框宽度 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: string \| number)` | 选中值变化时触发 |
| `clear` | `—` | 清空时触发 |
| `focus` | `—` | 获取焦点时触发 |
| `blur` | `—` | 失去焦点时触发 |
| `visibleChange` | `(visible: boolean)` | 下拉面板显示时触发 |

### 插槽

| 名称 | 说明 |
|------|------|
| `default` | 自定义选项内容 |
| `prefix` | 触发器前缀 |
| `empty` | 无选项时的空状态 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `focus()` | 使下拉框获取焦点 |
| `blur()` | 使下拉框失去焦点 |
| `open()` | 打开下拉面板 |
| `close()` | 关闭下拉面板 |

### 示例

```vue
<!-- 基础用法 -->
<CpDropdown v-model="value" :options="options" placeholder="请选择" />

<!-- 可搜索 -->
<CpDropdown v-model="value" :options="options" filterable />

<!-- 可清空 -->
<CpDropdown v-model="value" :options="options" clearable />
```

---

## CpSegmented 分段选择器

赛博朋克风格分段选择器，一组按钮式互斥选项，选中项带滑块高亮效果。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | — | 绑定值 (v-model) |
| `options` | `(string \| number \| SegmentedOption)[]` | — | 选项数组 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `variant` | `'solid' \| 'outline' \| 'semi' \| 'ghost' \| 'neon'` | `'solid'` | 变体样式 |
| `size` | `Size` | `'md'` | 尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 形状模式 |
| `color` | `string` | `''` | 自定义主题色 |
| `disabled` | `boolean` | `false` | 是否禁用所有选项 |
| `block` | `boolean` | `false` | 是否撑满父容器宽度（选项等宽） |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: SegmentedValueType)` | 值变化时触发 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-segmented-bg` | `var(--cp-bg-elevated)` |  |
| `--cp-segmented-border-color` | `var(--cp-border)` |  |
| `--cp-segmented-padding` | `2px` |  |
| `--cp-segmented-padding-x` | `3px` |  |
| `--cp-segmented-gap` | `2px` |  |
| `--cp-segmented-item-color` | `var(--cp-text-secondary)` |  |
| `--cp-segmented-item-hover-bg` | `var(--cp-state-hover)` |  |
| `--cp-segmented-item-padding` | `0 20px` |  |
| `--cp-segmented-indicator-bg` | `var(--cp-surface-bright)` |  |
| `--cp-segmented-indicator-border` | `transparent` |  |
| `--cp-segmented-indicator-shadow` | `none` |  |
| `--cp-segmented-active-color` | `var(--cp-text-primary)` |  |
| `--cp-segmented-transition` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` |  |
| `--cp-segmented-height` | `40px` |  |
| `--cp-segmented-font-size` | `var(--cp-font-size-lg)` |  |
| `--cp-segmented-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-segmented-active-font-weight` | `var(--cp-font-weight-bold)` |  |
| `--cp-segmented-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-segmented-indicator-offset` | `-2px` |  |
| `--cp-segmented-item-font-weight` | `var(--cp-segmented-active-font-weight)` |  |

### 示例

```vue
<CpSegmented v-model="active" :options="['日', '周', '月']" />

<CpSegmented
  v-model="mode"
  type="primary"
  variant="neon"
  :options="[
    { label: '列表', value: 'list' },
    { label: '网格', value: 'grid' },
  ]"
/>
```

---

## CpSlider 滑块

赛博朋克风格滑块组件，用于在给定的数值范围内进行选择。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `number \| [number, number]` | `0` | 绑定值 (v-model) |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `size` | `Size` | `'md'` | 滑块尺寸 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 滑块形状 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `range` | `boolean` | `false` | 是否为范围选择模式 |
| `showTooltip` | `boolean` | `true` | 是否显示数值提示 |
| `showStops` | `boolean` | `false` | 是否显示刻度点 |
| `marks` | `Record<number, string \| SliderMarkConfig>` | — | 标记刻度 |
| `color` | `string` | `''` | 自定义颜色 |
| `vertical` | `boolean` | `false` | 是否垂直模式 |
| `height` | `string` | `undefined` | 滑块高度（垂直模式必需） |
| `formatTooltip` | `(value: number) =` | — | 格式化 tooltip 显示内容 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: number \| [number, number])` | 值改变且释放滑块时触发 |
| `input` | `(value: number \| [number, number])` | 拖动过程中实时触发 |

### 示例

```vue
<!-- 基础用法 -->
<CpSlider v-model="value" />

<!-- 范围选择 -->
<CpSlider v-model="range" range />

<!-- 带刻度标记 -->
<CpSlider v-model="value" :marks="{ 0: '0°C', 100: '100°C' }" />
```

---

## CpSwitch 开关

赛博朋克风格开关组件，支持异步切换、内嵌文字、自定义颜色。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `boolean` | `false` | 绑定值 (v-model) |
| `size` | `Size` | `'md'` | 开关尺寸 |
| `type` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 开关类型（颜色预设） |
| `disabled` | `boolean` | `false` | 是否禁用开关 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `color` | `string` | `''` | 自定义选中状态颜色 |
| `inactiveColor` | `string` | `''` | 自定义未选中状态颜色 |
| `width` | `string \| number` | `''` | 强制指定宽度 |
| `fitText` | `boolean` | `false` | 是否适应文字宽度 |
| `activeText` | `string` | `''` | 选中时内嵌显示的文字 |
| `inactiveText` | `string` | `''` | 未选中时内嵌显示的文字 |
| `beforeChange` | `() =` | — | 切换前钩子，返回 false 或 Promise reject 时阻止切换 |
| `name` | `string` | `''` | 原生 name 属性 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(value: boolean)` | 值变化时触发 |

### 暴露方法

| 方法 | 说明 |
|------|------|
| `inputRef` | 原生 input 元素引用 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-switch-active-color` | `var(--cp-color-primary)` | CSS 变量 |
| `--cp-switch-active-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-switch-inactive-color` | `var(--cp-border)` |  |
| `--cp-switch-bg-color` | `color-mix(in srgb, var(--cp-bg-deep) 80%, transparent)` |  |
| `--cp-switch-text-color` | `var(--cp-text-inverse)` |  |

### 示例

```vue
<!-- 基础用法 -->
<CpSwitch v-model="enabled" />

<!-- 内嵌文字 -->
<CpSwitch v-model="enabled" active-text="ON" inactive-text="OFF" />

<!-- 异步切换 -->
<CpSwitch v-model="enabled" :before-change="handleConfirm" />
```

---

## CpUpload 上传

赛博朋克风格文件上传组件，支持拖拽、图片预览、多种变体和形状。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `UploadFile[]` | `[]` | 文件列表 (v-model) |
| `action` | `string` | `''` | 上传地址 |
| `headers` | `Record<string, string` | `{}` | 请求头 |
| `data` | `Record<string, string` | `{}` | 上传附加数据 |
| `name` | `string` | `'file'` | 上传文件字段名 |
| `accept` | `string` | `''` | 接受的文件类型 (原生 accept) |
| `multiple` | `boolean` | `false` | 是否支持多文件 |
| `directory` | `boolean` | `false` | 是否支持选择文件夹（webkitdirectory） |
| `limit` | `number` | `0` | 最大文件数 (0 = 无限制) |
| `maxSize` | `number` | `0` | 最大文件大小 bytes (0 = 无限制) |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `drag` | `boolean` | `false` | 拖拽上传模式 |
| `autoUpload` | `boolean` | `true` | 选择后自动上传 |
| `listType` | `'text' \| 'picture' \| 'picture-card'` | `'text'` | 文件列表展示类型 |
| `showFileList` | `boolean` | `true` | 是否显示文件列表 |
| `variant` | `'outline' \| 'dashed' \| 'filled' \| 'ghost'` | `'dashed'` | 变体样式 |
| `shape` | `'clip' \| 'no-clip' \| 'round'` | `'clip'` | 形状 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `color` | `string` | `''` | 自定义颜色（覆盖 type） |
| `size` | `Size` | `'md'` | 按钮/触发器尺寸 |
| `httpRequest` | `(options: UploadRequestOptions) =` | — | 自定义上传函数 |
| `beforeUpload` | `(file: File) =` | — | 上传前钩子，返回 false 或 reject 可阻止上传 |
| `onExceed` | `(files: File[], fileList: UploadFile[]) =` | — | 超出文件数限制时的回调 |
| `inlinePreview` | `boolean` | — | 单图内联预览（picture-card 模式下） |
| `preview` | `boolean` | `false` | 是否开启图片卡片点击预览功能 |
| `download` | `boolean` | `false` | 在预览大图时，是否允许下载图片 |
| `showInnerStripe` | `boolean` | `false` | 是否显示 CpProgress 内圈虚线装饰 |
| `placeholder` | `string` | `undefined` | 自定义触发器文案 |
| `placeholderIcon` | `IconValue` | `undefined` | 自定义触发器图标组件 |
| `dimmed` | `boolean` | `false` | 是否为减淡模式 |
| `successType` | `string` | `undefined` | 上传成功时的边框颜色 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(file: UploadFile, _fileList: UploadFile[])` | 文件列表变化 |
| `success` | `(_response: unknown, file: UploadFile, _fileList: UploadFile[])` | 上传成功 |
| `error` | `(_error: Error, file: UploadFile, _fileList: UploadFile[])` | 上传失败 |
| `progress` | `(_percentage: number, file: UploadFile)` | 上传进度 |
| `remove` | `(file: UploadFile, _fileList: UploadFile[])` | 文件移除 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-upload-color` | `var(--cp-color-primary)` |  |
| `--cp-upload-border-color` | `var(--cp-border)` |  |
| `--cp-upload-bg` | `transparent` |  |
| `--cp-upload-card-size` | `120px` |  |
| `--cp-upload-success-color` | `var(--cp-color-success)` |  |

### 示例

```vue
<CpUpload v-model="fileList" action="/api/upload" />
<CpUpload v-model="fileList" action="/api/upload" drag />
```

---

