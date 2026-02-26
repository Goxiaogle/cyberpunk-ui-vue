---
name: components-form
description: 表单组件的详细属性参考：Form、FormItem、Input、InputNumber、Textarea、Switch、Slider、Dropdown、Checkbox、Radio、Segmented、Upload。
---

# 表单组件属性参考

## CpForm 表单容器

提供表单布局（label 位置、行内模式）、验证管理和全局配置注入。

### Props

| 属性                      | 类型                                     | 默认值    | 说明                       |
| ------------------------- | ---------------------------------------- | --------- | -------------------------- |
| `model`                   | `Record<string, any>`                    | —         | 表单数据对象               |
| `rules`                   | `Record<string, FormRule \| FormRule[]>` | `{}`      | 验证规则                   |
| `labelWidth`              | `string \| number`                       | `'auto'`  | 标签宽度                   |
| `labelPosition`           | `'left' \| 'right' \| 'top'`             | `'right'` | 标签位置                   |
| `labelSuffix`             | `string`                                 | `''`      | 标签后缀（如 `'：'`）      |
| `size`                    | `'sm' \| 'md' \| 'lg'`                   | `'md'`    | 控件尺寸                   |
| `disabled`                | `boolean`                                | `false`   | 全局禁用                   |
| `showMessage`             | `boolean`                                | `true`    | 全局：显示验证错误信息     |
| `reserveErrorSpace`       | `boolean`                                | `false`   | 全局：预留错误信息占位高度 |
| `inline`                  | `boolean`                                | `false`   | 行内表单模式               |
| `requireAsteriskPosition` | `'left' \| 'right'`                      | `'left'`  | 必填星号位置               |

### FormRule 接口

```typescript
interface FormRule {
  required?: boolean;
  message?: string;
  trigger?: "blur" | "change";
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (
    value: any,
    rule: FormRule,
  ) => boolean | string | Promise<boolean | string>;
}
```

### 暴露方法

| 方法              | 参数                 | 说明                           |
| ----------------- | -------------------- | ------------------------------ |
| `validate()`      | —                    | 校验全部字段，返回 `Promise`   |
| `validateField()` | `(prop: string)`     | 校验指定字段                   |
| `resetFields()`   | —                    | 重置所有字段到初始值并清除验证 |
| `clearValidate()` | `(props?: string[])` | 仅清除验证状态                 |

### CSS 变量

| 变量                          | 默认值                     | 说明                  |
| ----------------------------- | -------------------------- | --------------------- |
| `--cp-form-gap`               | `var(--cp-spacing-lg)`     | 表单项间距            |
| `--cp-form-inline-gap`        | `var(--cp-spacing-lg)`     | 行内模式水平间距      |
| `--cp-form-item-gap`          | `var(--cp-spacing-md)`     | label 与 content 间距 |
| `--cp-form-label-color`       | `var(--cp-text-secondary)` | 标签文字颜色          |
| `--cp-form-label-font-size`   | `var(--cp-font-size-md)`   | 标签字号              |
| `--cp-form-label-font-weight` | `500`                      | 标签字重              |
| `--cp-form-label-width`       | `auto`                     | 标签宽度              |
| `--cp-form-required-color`    | `var(--cp-color-error)`    | 必填星号颜色          |
| `--cp-form-error-color`       | `var(--cp-color-error)`    | 错误信息颜色          |
| `--cp-form-error-font-size`   | `var(--cp-font-size-sm)`   | 错误信息字号          |
| `--cp-form-error-height`      | `20px`                     | 错误信息预留高度      |
| `--cp-form-error-margin-top`  | `4px`                      | 错误信息与控件间距    |

### 示例

```vue
<CpForm :model="formData" :rules="rules" label-position="right">
  <CpFormItem label="用户名" prop="username" required reserve-error-space>
    <CpInput v-model="formData.username" placeholder="请输入用户名" />
  </CpFormItem>
  <CpFormItem label="激活" prop="active">
    <CpSwitch v-model="formData.active" />
  </CpFormItem>
  <CpFormItem>
    <CpButton type="primary" @click="onSubmit">提交</CpButton>
    <CpButton @click="formRef?.resetFields()">重置</CpButton>
  </CpFormItem>
</CpForm>
```

---

## CpFormItem 表单项

包含标签、内容区和错误信息区域。支持验证规则和 Form 上下文继承。

### Props

| 属性                | 类型                     | 默认值  | 说明                         |
| ------------------- | ------------------------ | ------- | ---------------------------- |
| `label`             | `string`                 | `''`    | 标签文本                     |
| `prop`              | `string`                 | `''`    | 对应 model 字段名            |
| `required`          | `boolean`                | `false` | 是否必填                     |
| `rules`             | `FormRule \| FormRule[]` | —       | 单项规则（覆盖 Form 级规则） |
| `labelWidth`        | `string \| number`       | —       | 覆盖 Form 的 labelWidth      |
| `showMessage`       | `boolean`                | —       | 独立控制是否显示错误信息     |
| `reserveErrorSpace` | `boolean`                | —       | 独立控制是否预留错误占位高度 |
| `error`             | `string`                 | `''`    | 手动错误信息                 |
| `size`              | `'sm' \| 'md' \| 'lg'`   | —       | 覆盖尺寸                     |

### 插槽

| 名称      | 作用域参数  | 说明           |
| --------- | ----------- | -------------- |
| `default` | —           | 表单控件       |
| `label`   | —           | 自定义标签内容 |
| `error`   | `{ error }` | 自定义错误信息 |

### 暴露方法

| 方法              | 说明         |
| ----------------- | ------------ |
| `validate()`      | 验证该表单项 |
| `resetField()`    | 重置该表单项 |
| `clearValidate()` | 清除验证状态 |
| `validateState`   | 当前验证状态 |
| `validateMessage` | 当前验证信息 |

### 示例

```vue
<!-- 独立开启错误占位 -->
<CpFormItem label="名称" prop="name" required reserve-error-space>
  <CpInput v-model="formData.name" />
</CpFormItem>

<!-- 无验证项（不占位） -->
<CpFormItem label="描述">
  <CpInput v-model="formData.desc" />
</CpFormItem>
```

---

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
| `width`         | `string \| number`                                           | `''`             | 宽度（空 = 100%） |
| `disabled`      | `boolean`                                                    | `false`          | 禁用              |
| `clearable`     | `boolean`                                                    | `false`          | 可清空            |
| `clearDuration` | `number`                                                     | `150`            | 清除动画时长 (ms) |
| `filterable`    | `boolean`                                                    | `false`          | 可搜索            |
| `inline`        | `boolean`                                                    | `false`          | 行内搜索模式      |
| `color`         | `string`                                                     | `''`             | 聚焦颜色          |
| `placement`     | `'bottom' \| 'bottom-start' \| 'bottom-end' \| 'top' \| ...` | `'bottom-start'` | 弹出位置          |
| `maxHeight`     | `number`                                                     | `256`            | 下拉面板最大高度  |

### CSS 变量

| 变量                  | 默认值 | 说明                    |
| --------------------- | ------ | ----------------------- |
| `--cp-dropdown-width` | `100%` | 可通过 CSS 覆盖组件宽度 |

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

<!-- 固定宽度 -->
<CpDropdown v-model="selected" :options="options" :width="200" />

<!-- Flex 布局中使用 -->
<div style="display: flex; gap: 12px;">
  <CpDropdown v-model="v1" :options="opts1" style="flex: 1;" />
  <CpDropdown v-model="v2" :options="opts2" style="flex: 2;" />
</div>
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

| 变量                                    | 默认值                                  | 说明             |
| --------------------------------------- | --------------------------------------- | ---------------- |
| `--cp-segmented-bg`                     | `var(--cp-bg-elevated)`                 | track 背景       |
| `--cp-segmented-border-color`           | `var(--cp-border)`                      | track 边框色     |
| `--cp-segmented-padding`                | `3px`                                   | track 垂直内边距 |
| `--cp-segmented-padding-x`              | `4px`                                   | track 水平内边距 |
| `--cp-segmented-gap`                    | `2px`                                   | item 间距        |
| `--cp-segmented-height`                 | `36px`                                  | 组件高度         |
| `--cp-segmented-font-size`              | `var(--cp-font-size-md)`                | 字号             |
| `--cp-segmented-font-weight`            | `var(--cp-font-weight-semibold)`        | 默认字重         |
| `--cp-segmented-active-font-weight`     | `var(--cp-font-weight-bold)`            | 选中项字重       |
| `--cp-segmented-font-weight-transition` | `var(--cp-font-weight-transition-fast)` | 字重过渡         |
| `--cp-segmented-item-color`             | `var(--cp-text-secondary)`              | item 文字色      |
| `--cp-segmented-item-hover-bg`          | `var(--cp-state-hover)`                 | item hover 背景  |
| `--cp-segmented-item-padding`           | `0 12px`                                | item 内边距      |
| `--cp-segmented-indicator-bg`           | `var(--cp-surface-bright)`              | 滑块背景         |
| `--cp-segmented-indicator-border`       | `transparent`                           | 滑块边框色       |
| `--cp-segmented-indicator-shadow`       | `none`                                  | 滑块辉光         |
| `--cp-segmented-indicator-offset`       | `-2px`                                  | 滑块水平偏移     |
| `--cp-segmented-active-color`           | `var(--cp-text-primary)`                | 选中文字色       |
| `--cp-segmented-transition`             | `0.3s cubic-bezier(...)`                | 动画时长         |

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

---

## CpUpload 文件上传

赛博朋克风格文件上传组件。支持拖拽、图片预览、多种变体 / 形状，可深度自定义触发区内容。

### Props

| 属性              | 类型                                                                    | 默认值      | 说明                                                                   |
| ----------------- | ----------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `v-model`         | `UploadFile[]`                                                          | `[]`        | 文件列表                                                               |
| `action`          | `string`                                                                | `''`        | 上传地址                                                               |
| `headers`         | `Record<string, string>`                                                | `{}`        | 请求头                                                                 |
| `data`            | `Record<string, string>`                                                | `{}`        | 附加参数                                                               |
| `name`            | `string`                                                                | `'file'`    | 上传字段名                                                             |
| `accept`          | `string`                                                                | `''`        | 接受的文件类型（原生 accept）                                          |
| `multiple`        | `boolean`                                                               | `false`     | 是否多文件                                                             |
| `limit`           | `number`                                                                | `0`         | 最大文件数（0 = 无限制）                                               |
| `maxSize`         | `number`                                                                | `0`         | 最大文件大小 bytes（0 = 无限制）                                       |
| `disabled`        | `boolean`                                                               | `false`     | 禁用                                                                   |
| `drag`            | `boolean`                                                               | `false`     | 拖拽上传模式                                                           |
| `autoUpload`      | `boolean`                                                               | `true`      | 选择后自动上传                                                         |
| `listType`        | `'text' \| 'picture' \| 'picture-card'`                                 | `'text'`    | 文件列表展示类型                                                       |
| `showFileList`    | `boolean`                                                               | `true`      | 是否显示文件列表                                                       |
| `variant`         | `'outline' \| 'dashed' \| 'filled' \| 'ghost'`                          | `'dashed'`  | 变体样式                                                               |
| `shape`           | `'clip' \| 'no-clip' \| 'round'`                                        | `'clip'`    | 形状                                                                   |
| `type`            | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型                                                               |
| `color`           | `string`                                                                | `''`        | 自定义颜色（覆盖 type）                                                |
| `size`            | `Size`                                                                  | `'md'`      | 按钮尺寸                                                               |
| `httpRequest`     | `(options: UploadRequestOptions) => Promise \| void`                    | —           | 自定义上传函数                                                         |
| `beforeUpload`    | `(file: File) => boolean \| Promise<boolean>`                           | —           | 上传前钩子                                                             |
| `onExceed`        | `(files: File[], fileList: UploadFile[]) => void`                       | —           | 超限回调                                                               |
| `preview`         | `boolean`                                                               | `false`     | 卡片模式下是否开启图片大图预览                                         |
| `download`        | `boolean`                                                               | `false`     | 卡片模式下预览图片时，是否允许下载图片                                 |
| `inlinePreview`   | `boolean`                                                               | `undefined` | 单图内联预览。`limit=1 + picture-card` 时默认启用，可显式 `false` 关闭 |
| `showInnerStripe` | `boolean`                                                               | `false`     | CpProgress 内圈虚线装饰                                                |
| `placeholder`     | `string`                                                                | `undefined` | 自定义触发器文案                                                       |
| `placeholderIcon` | `Component`                                                             | `undefined` | 自定义触发器图标组件                                                   |

### 类型定义

```typescript
interface UploadFile {
  uid: number;
  name: string;
  size: number;
  status: "ready" | "uploading" | "success" | "error";
  percentage: number;
  url?: string;
  response?: unknown;
  raw?: File;
}

interface UploadRequestOptions {
  action: string;
  file: File;
  filename: string;
  headers: Record<string, string>;
  data: Record<string, string>;
  onProgress: (percentage: number) => void;
  onSuccess: (response: unknown) => void;
  onError: (error: Error) => void;
}
```

### 插槽

| 名称          | 作用域                                           | 说明                                              |
| ------------- | ------------------------------------------------ | ------------------------------------------------- |
| `default`     | —                                                | 完全替换触发区域（隐藏默认 drag / card / button） |
| `placeholder` | `{ mode: 'drag' \| 'picture-card' \| 'button' }` | 自定义触发区内部内容（图标+文案），保留外层结构   |

### 事件

| 名称       | 参数                         | 说明         |
| ---------- | ---------------------------- | ------------ |
| `change`   | `(file, fileList)`           | 文件列表变化 |
| `success`  | `(response, file, fileList)` | 上传成功     |
| `error`    | `(error, file, fileList)`    | 上传失败     |
| `progress` | `(percentage, file)`         | 上传进度     |
| `remove`   | `(file, fileList)`           | 文件移除     |

### 暴露方法

| 方法           | 说明                                      |
| -------------- | ----------------------------------------- |
| `submit()`     | 手动触发上传（`autoUpload=false` 时使用） |
| `clearFiles()` | 清空文件列表                              |

### CSS 变量

| 变量                       | 默认值                    | 说明                   |
| -------------------------- | ------------------------- | ---------------------- |
| `--cp-upload-color`        | `var(--cp-color-primary)` | 主题色（hover / 激活） |
| `--cp-upload-border-color` | `var(--cp-border)`        | 边框颜色               |
| `--cp-upload-bg`           | `var(--cp-bg-elevated)`   | 背景色                 |
| `--cp-upload-card-size`    | `120px`                   | picture-card 卡片尺寸  |

### 示例

```vue
<!-- 基础 -->
<CpUpload v-model="fileList" action="/api/upload" />

<!-- 拖拽 -->
<CpUpload v-model="fileList" action="/api/upload" drag />

<!-- 图片卡片 -->
<CpUpload
  v-model="fileList"
  action="/api/upload"
  list-type="picture-card"
  accept="image/*"
/>

<!-- 单图内联预览（头像/封面）：limit=1 自动启用 -->
<CpUpload
  v-model="avatar"
  action="/api/upload"
  list-type="picture-card"
  :limit="1"
/>

<!-- 自定义 placeholder 文案 -->
<CpUpload v-model="fileList" action="/api/upload" placeholder="上传附件" />
<CpUpload
  v-model="fileList"
  action="/api/upload"
  drag
  placeholder="将文件拖到这里"
/>
<CpUpload
  v-model="fileList"
  action="/api/upload"
  list-type="picture-card"
  placeholder="添加图片"
/>

<!-- #placeholder 插槽完全自定义 -->
<CpUpload v-model="fileList" action="/api/upload" drag>
  <template #placeholder="{ mode }">
    <MyCustomIcon />
    <span>拖拽或点击上传图片</span>
    <span>支持 JPG / PNG，最大 5MB</span>
  </template>
</CpUpload>

<!-- 表单集成 -->
<CpForm :model="form" :rules="rules">
  <CpFormItem label="附件" prop="files">
    <CpUpload v-model="form.files" action="/api/upload" drag />
  </CpFormItem>
</CpForm>
```
