# 未分类组件属性参考

## CpDescriptions 描述列表

赛博朋克风格描述列表，以键值对形式展示结构化数据。配合 CpDescriptionsItem 声明式定义条目

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `title` | `string` | `''` | 标题 |
| `extra` | `string` | `''` | 额外说明文字（右侧） |
| `column` | `number` | `3` | 一行几列 |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 排列方向 |
| `variant` | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | 变体样式 |
| `size` | `Size` | `'md'` | 尺寸 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `color` | `string` | `''` | 自定义主题色 |
| `labelWidth` | `string \| number` | `''` | 全局 label 宽度 |
| `labelAlign` | `'left' \| 'center' \| 'right'` | `'left'` | label 水平对齐 |
| `labelVerticalAlign` | `'center' \| 'top' \| 'bottom' \| 'auto'` | `'center'` | label 垂直对齐（仅 direction 为 horizontal 时生效） |
| `contentAlign` | `'left' \| 'center' \| 'right'` | `'left'` | 内容水平对齐 |
| `contentVerticalAlign` | `'center' \| 'top' \| 'bottom' \| 'auto'` | `'center'` | 内容垂直对齐（仅 direction 为 horizontal 时生效） |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-descriptions-color` | `#{$type-color}` |  |
| `--cp-descriptions-border` | `color-mix(in srgb, #{$type-color} 30%, transparent)` |  |
| `--cp-descriptions-label-color` | `#{$type-color}` |  |
| `--cp-descriptions-content-color` | `var(--cp-text-primary)` |  |
| `--cp-descriptions-label-bg` | `color-mix(in srgb, #{$type-color} 6%, transparent)` |  |
| `--cp-descriptions-cell-padding` | `#{map.get($size-config, cell-padding)}` |  |
| `--cp-descriptions-font-size` | `#{map.get($size-config, font-size)}` |  |
| `--cp-descriptions-header-font-size` | `#{map.get($size-config, header-font-size)}` |  |
| `--cp-descriptions-header-padding` | `#{map.get($size-config, header-padding)}` |  |

### 示例

```vue
<CpDescriptions title="设备信息" :column="3">
  <CpDescriptionsItem label="节点 ID">CYB-7749</CpDescriptionsItem>
  <CpDescriptionsItem label="状态">在线</CpDescriptionsItem>
</CpDescriptions>
```

---

## CpDescriptionsItem 描述列表项

描述列表条目，在 CpDescriptions 内部使用

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `label` | `string` | `''` | 标签文字 |
| `span` | `number` | `1` | 占多少列 |
| `labelWidth` | `string \| number` | `''` | 覆盖父级 label 宽度 |
| `labelAlign` | `'left' \| 'center' \| 'right' \| ''` | `''` | 覆盖父级 label 水平对齐 |
| `labelVerticalAlign` | `DescriptionsVerticalAlign \| ''` | `''` | 覆盖父级 label 垂直对齐 |
| `contentAlign` | `'left' \| 'center' \| 'right' \| ''` | `''` | 覆盖父级内容水平对齐 |
| `contentVerticalAlign` | `DescriptionsVerticalAlign \| ''` | `''` | 覆盖父级内容垂直对齐 |
| `labelClassName` | `string` | `''` | label 自定义类名 |
| `contentClassName` | `string` | `''` | content 自定义类名 |
| `labelColor` | `string` | `''` | label 颜色（覆盖 CSS 变量） |
| `contentColor` | `string` | `''` | content 颜色（覆盖 CSS 变量） |
| `type` | `DescriptionsType \| ''` | `''` | 单项颜色类型（覆盖父级） |
| `color` | `string` | `''` | 单项自定义色（覆盖父级） |

---

