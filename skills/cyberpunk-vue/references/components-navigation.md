# 导航组件属性参考

## CpMenu 菜单

赛博朋克风格导航菜单，支持水平/垂直模式、折叠、多色彩类型。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `mode` | `'horizontal' \| 'vertical'` | `'vertical'` | 菜单布局方向 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 菜单形状 |
| `variant` | `'solid' \| 'outline' \| 'note'` | `'solid'` | 菜单变体 |
| `defaultActive` | `string` | `''` | 默认激活的菜单项 index |
| `defaultOpeneds` | `string[]` | `[]` | 默认展开的子菜单 index 数组 |
| `uniqueOpened` | `boolean` | `false` | 是否只保持一个子菜单展开（手风琴模式） |
| `collapse` | `boolean` | `false` | 是否折叠菜单（仅 vertical 模式有效） |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `color` | `string` | `''` | 自定义高亮颜色（覆盖 type 预设） |
| `router` | `boolean` | `false` | 是否启用 vue-router 模式 |
| `index` | `string` | — | 菜单项唯一标识（可选，不传时自动生成） |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `icon` | `IconValue` | — | 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等） |
| `route` | `string \| Record<string, unknown` | — | vue-router 路由对象或路径 |
| `index` | `string` | — | 子菜单唯一标识 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `icon` | `IconValue` | — | 图标（CpIcon 兼容值：Vue 组件、Iconify 名称、SVG 字符串等） |
| `title` | `string` | — | 子菜单标题文本 |
| `title` | `string` | `''` | 分组标题 |
| `data` | `MenuNavItem[]` | — | 菜单数据 |
| `mode` | `MenuMode` | `'vertical'` | 菜单模式 |
| `defaultActive` | `string` | `''` | 默认激活项 index |
| `defaultOpeneds` | `string[]` | `[]` | 默认展开的 sub-menu index 列表 |
| `uniqueOpened` | `boolean` | `false` | 是否只展开一个 sub-menu |
| `collapse` | `boolean` | `false` | 是否折叠（仅 vertical 有效） |
| `type` | `MenuType` | `'default'` | 颜色类型 |
| `shape` | `MenuShape` | `'clip'` | 菜单形状 |
| `variant` | `MenuVariant` | `'solid'` | 菜单变体 |
| `color` | `string` | `''` | 自定义高亮颜色 |
| `router` | `boolean` | `false` | 是否启用 vue-router 模式 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `select` | `(index: string, indexPath: string[])` | 菜单项被选中 |
| `open` | `(index: string, indexPath: string[])` | 子菜单展开 |
| `close` | `(index: string, indexPath: string[])` | 子菜单收起 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-menu-bg` | `transparent` |  |
| `--cp-menu-text` | `var(--cp-text-secondary)` |  |
| `--cp-menu-hover-text` | `var(--cp-text-primary)` |  |
| `--cp-menu-active-text` | `#{$color}` |  |
| `--cp-menu-icon` | `var(--cp-menu-text)` |  |
| `--cp-menu-active-icon` | `var(--cp-menu-active-text)` |  |
| `--cp-menu-active-bg` | `var(--cp-menu-active-color-light)` |  |
| `--cp-menu-font-family` | `var(--cp-font-family-ui)` |  |
| `--cp-menu-font-weight` | `var(--cp-font-weight-normal, 450)` |  |
| `--cp-menu-active-font-weight` | `var(--cp-font-weight-semibold, 620)` |  |
| `--cp-menu-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-menu-active-color` | `#{$color}` |  |
| `--cp-menu-active-color-light` | `var(--cp-color-#{$type}-light)` |  |
| `--cp-menu-hover-bg` | `var(--cp-state-hover)` |  |
| `--cp-menu-border` | `var(--cp-border)` |  |
| `--cp-menu-item-height` | `46px` |  |
| `--cp-menu-item-font-weight` | `var(--cp-menu-active-font-weight)` |  |

### 示例

```vue
<CpMenu default-active="1">
  <CpMenuItem index="1">菜单项一</CpMenuItem>
  <CpSubMenu index="2">
    <template #title>子菜单</template>
    <CpMenuItem index="2-1">子菜单项</CpMenuItem>
  </CpSubMenu>
</CpMenu>
```

---

## CpBreadcrumb 面包屑

赛博朋克风格面包屑导航，展示当前页面在层级结构中的位置。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `separator` | `string` | `'/'` | 分隔符文本 |
| `separatorIcon` | `Component` | — | 分隔符图标（优先级高于 separator 文本） |
| `variant` | `'default' \| 'plain' \| 'outline' \| 'background'` | `'default'` | 变体样式 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色预设类型 |
| `color` | `string` | `''` | 自定义主题色（覆盖 type 预设） |
| `to` | `string \| Record<string, unknown` | `''` | 路由跳转目标（vue-router 的 `to`） |
| `replace` | `boolean` | `false` | 使用 router.replace 替代 router.push |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-breadcrumb-color` | `var(--cp-color-info)` |  |
| `--cp-breadcrumb-text` | `var(--cp-text-secondary)` |  |
| `--cp-breadcrumb-separator-color` | `var(--cp-text-muted)` |  |
| `--cp-breadcrumb-separator-gap` | `8px` |  |
| `--cp-breadcrumb-hover-color` | `var(--cp-breadcrumb-color)` |  |
| `--cp-breadcrumb-active-color` | `var(--cp-text-primary)` |  |
| `--cp-breadcrumb-font-weight` | `var(--cp-font-weight-normal)` |  |
| `--cp-breadcrumb-active-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-breadcrumb-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-breadcrumb-inner-font-weight` | `var(--cp-breadcrumb-font-weight)` |  |

### 示例

```vue
<CpBreadcrumb>
  <CpBreadcrumbItem>首页</CpBreadcrumbItem>
  <CpBreadcrumbItem>系统管理</CpBreadcrumbItem>
  <CpBreadcrumbItem>用户管理</CpBreadcrumbItem>
</CpBreadcrumb>
```

---

## CpPagination 分页

赛博朋克风格分页组件，用于长列表数据分页导航。

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `currentPage` | `number` | `1` | 当前页码 (v-model:currentPage) |
| `pageSize` | `number` | `10` | 每页显示条数 (v-model:pageSize) |
| `total` | `number` | `0` | 总条数 |
| `pageSizes` | `number[]` | `[10, 20, 50, 100]` | 可选的每页条数列表 |
| `pagerCount` | `number` | `7` | 最大可见页码按钮数（应为奇数 >= 5） |
| `layout` | `string` | `'prev, pager, next'` | 布局配置，逗号分隔 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `hideOnSinglePage` | `boolean` | `false` | 只有一页时隐藏 |
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | 颜色类型 |
| `shape` | `'clip' \| 'no-clip' \| 'round' \| 'circle'` | `'clip'` | 形状 |
| `size` | `Size` | `'md'` | 尺寸 |
| `color` | `string` | `''` | 自定义颜色（CSS 颜色值） |
| `buttonVariant` | `ButtonVariant` | `'ghost'` | 分页按钮变体 |
| `totalTemplate` | `string` | `'共 {total} 条'` | 总条数文案模板 |
| `sizeTemplate` | `string` | `'{size} 条/页'` | 每页条数选项文案模板 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `change` | `(page: number)` | 页码变化事件（同 update:currentPage，便于监听） |
| `sizeChange` | `(size: number)` | 每页条数变化事件 |

### CSS 变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--cp-pagination-color` | `var(--cp-color-primary)` |  |
| `--cp-pagination-color-light` | `var(--cp-color-primary-light)` |  |
| `--cp-pagination-font-weight` | `var(--cp-font-weight-medium)` |  |
| `--cp-pagination-active-font-weight` | `var(--cp-font-weight-semibold)` |  |
| `--cp-pagination-strong-font-weight` | `var(--cp-font-weight-bold)` |  |
| `--cp-pagination-font-weight-transition` | `var(--cp-font-weight-transition-fast)` |  |
| `--cp-pagination-height` | `#{map.get($size-config, height)}` |  |
| `--cp-pagination-btn-size` | `#{map.get($size-config, btn-size)}` |  |
| `--cp-pagination-font-size` | `#{map.get($size-config, font-size)}` |  |
| `--cp-pagination-clip` | `#{map.get($size-config, clip)}` |  |
| `--cp-pagination-section-gap` | `#{map.get($size-config, section-gap)}` |  |
| `--cp-pagination-pager-gap` | `#{map.get($size-config, pager-gap)}` |  |
| `--cp-pagination-sizes-width` | `115px` |  |

### 示例

```vue
<CpPagination
  v-model:currentPage="page"
  v-model:pageSize="size"
  :total="100"
  layout="total, sizes, prev, pager, next, jumper"
/>
```

---

