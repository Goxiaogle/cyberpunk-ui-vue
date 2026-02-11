---
name: components-navigation
description: 导航组件的详细属性参考：Menu、MenuItem、SubMenu、MenuItemGroup、MenuNav、Pagination。
---

# 导航组件属性参考

## CpMenu 菜单

赛博朋克风格导航菜单，支持水平/垂直模式、折叠、手风琴。

> [!NOTE]
> CpMenu 默认背景色为 `transparent`，自动继承父容器背景。嵌入 CpAside / CpHeader 时无需手动设置背景色。

### Props

| 属性              | 类型                                                                    | 默认值       | 说明                           |
| ----------------- | ----------------------------------------------------------------------- | ------------ | ------------------------------ |
| `mode`            | `'horizontal' \| 'vertical'`                                            | `'vertical'` | 菜单布局方向                   |
| `defaultActive`   | `string`                                                                | `''`         | 默认激活的菜单项 index         |
| `defaultOpeneds`  | `string[]`                                                              | `[]`         | 默认展开的子菜单 index 数组    |
| `uniqueOpened`    | `boolean`                                                               | `false`      | 手风琴模式（只展开一个子菜单） |
| `collapse`        | `boolean`                                                               | `false`      | 折叠菜单（仅 vertical 有效）   |
| `type`            | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'`  | 颜色预设类型                   |
| `color`           | `string`                                                                | `''`         | 自定义高亮颜色（覆盖 type）    |
| `backgroundColor` | `string`                                                                | `''`         | 菜单背景色                     |
| `textColor`       | `string`                                                                | `''`         | 菜单文字颜色                   |
| `activeTextColor` | `string`                                                                | `''`         | 激活项文字颜色                 |
| `router`          | `boolean`                                                               | `false`      | 启用 vue-router 模式           |

### 事件

| 事件名   | 参数                                   | 说明         |
| -------- | -------------------------------------- | ------------ |
| `select` | `(index: string, indexPath: string[])` | 菜单项被选中 |
| `open`   | `(index: string, indexPath: string[])` | 子菜单展开   |
| `close`  | `(index: string, indexPath: string[])` | 子菜单收起   |

### 插槽

| 名称      | 说明                                      |
| --------- | ----------------------------------------- |
| `default` | 菜单内容（CpMenuItem / CpSubMenu 等组合） |

### CSS 变量

| 变量                     | 默认值                     | 说明                   |
| ------------------------ | -------------------------- | ---------------------- |
| `--cp-menu-bg`           | `transparent`              | 菜单主体背景色         |
| `--cp-menu-popup-bg`     | `var(--cp-bg-elevated)`    | 水平模式弹出面板背景色 |
| `--cp-menu-item-height`  | `46px`                     | 菜单项高度             |
| `--cp-menu-text`         | `var(--cp-text-secondary)` | 菜单文字颜色           |
| `--cp-menu-active-color` | `var(--cp-color-primary)`  | 激活色                 |
| `--cp-menu-hover-bg`     | `var(--cp-state-hover)`    | 悬停背景色             |
| `--cp-menu-border`       | `var(--cp-border)`         | 边框颜色               |

### 示例

```vue
<CpMenu default-active="1" @select="handleSelect">
  <CpMenuItem index="1" :icon="HomeIcon">首页</CpMenuItem>
  <CpSubMenu index="2" :icon="SettingsIcon">
    <template #title>系统管理</template>
    <CpMenuItem index="2-1">用户管理</CpMenuItem>
    <CpMenuItem index="2-2">角色管理</CpMenuItem>
  </CpSubMenu>
</CpMenu>
```

---

## CpMenuItem 菜单项

### Props

| 属性       | 类型                         | 默认值  | 说明                          |
| ---------- | ---------------------------- | ------- | ----------------------------- |
| `index`    | `string`                     | -       | 唯一标识（必填）              |
| `disabled` | `boolean`                    | `false` | 是否禁用                      |
| `icon`     | `Component \| string`        | -       | 图标（CpIcon 兼容值）         |
| `route`    | `string \| RouteLocationRaw` | -       | vue-router 路由（覆盖 index） |

### 事件

| 事件名  | 参数              | 说明         |
| ------- | ----------------- | ------------ |
| `click` | `(index: string)` | 菜单项被点击 |

### 插槽

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 菜单项文本 |
| `icon`    | 自定义图标 |

---

## CpSubMenu 子菜单

### Props

| 属性       | 类型                  | 默认值  | 说明                  |
| ---------- | --------------------- | ------- | --------------------- |
| `index`    | `string`              | -       | 唯一标识（必填）      |
| `disabled` | `boolean`             | `false` | 是否禁用              |
| `icon`     | `Component \| string` | -       | 图标（CpIcon 兼容值） |

### 行为说明

- **垂直模式**：点击标题展开/收起
- **水平模式 & 折叠模式**：hover 自动展开/关闭（200ms 延迟）
- 子项被选中时，父级 SubMenu 自动高亮

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `title`   | 子菜单标题   |
| `default` | 子菜单项内容 |
| `icon`    | 自定义图标   |

---

## CpMenuItemGroup 菜单分组

### Props

| 属性    | 类型     | 默认值 | 说明     |
| ------- | -------- | ------ | -------- |
| `title` | `string` | `''`   | 分组标题 |

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `title`   | 自定义标题   |
| `default` | 分组内菜单项 |

---

## CpMenuNav 数据驱动菜单

基于 `MenuNavItem[]` 数据自动递归渲染菜单结构。透传 CpMenu 所有 props。

### 额外 Props

| 属性   | 类型            | 说明               |
| ------ | --------------- | ------------------ |
| `data` | `MenuNavItem[]` | 菜单数据源（必填） |

其余 props 与 `CpMenu` 完全一致。

### MenuNavItem 数据结构

| 字段       | 类型                  | 说明                               |
| ---------- | --------------------- | ---------------------------------- |
| `index`    | `string`              | 唯一标识                           |
| `label`    | `string`              | 显示文字                           |
| `icon`     | `Component \| string` | 图标（可选）                       |
| `disabled` | `boolean`             | 是否禁用（可选）                   |
| `route`    | `string \| Record`    | vue-router 路由（可选）            |
| `children` | `MenuNavItem[]`       | 子菜单（有则渲染 SubMenu）         |
| `group`    | `string`              | 分组标题（有则渲染 MenuItemGroup） |

### 示例

```vue
<script setup>
import { markRaw } from "vue";
import MdiHome from "~icons/mdi/home";
import MdiCog from "~icons/mdi/cog";

const menuData = [
  { index: "1", label: "首页", icon: markRaw(MdiHome) },
  {
    index: "2",
    label: "系统管理",
    icon: markRaw(MdiCog),
    children: [
      { index: "2-1", label: "用户管理" },
      { index: "2-2", label: "角色管理" },
    ],
  },
  {
    group: "高级功能",
    children: [
      { index: "3-1", label: "AI 引擎" },
      { index: "3-2", label: "量子计算" },
    ],
  },
];
</script>

<CpMenuNav :data="menuData" default-active="1" />
```

---

## CpPagination 分页

赛博朋克风格分页导航，支持布局配置、多种形状/颜色、CpButton 集成、spacer 左右分离布局。

### Props

| 属性               | 类型                                                                    | 默认值              | 说明                             |
| ------------------ | ----------------------------------------------------------------------- | ------------------- | -------------------------------- |
| `currentPage`      | `number`                                                                | `1`                 | 当前页码 (v-model:currentPage)   |
| `pageSize`         | `number`                                                                | `10`                | 每页条数 (v-model:pageSize)      |
| `total`            | `number`                                                                | `0`                 | 总条数                           |
| `pageSizes`        | `number[]`                                                              | `[10,20,50,100]`    | 可选每页条数列表                 |
| `pagerCount`       | `number`                                                                | `7`                 | 最大可见页码数（奇数 5–21）      |
| `layout`           | `string`                                                                | `'prev,pager,next'` | 布局配置，逗号分隔               |
| `disabled`         | `boolean`                                                               | `false`             | 禁用状态                         |
| `hideOnSinglePage` | `boolean`                                                               | `false`             | 单页时隐藏                       |
| `type`             | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'`         | 颜色类型                         |
| `shape`            | `'clip' \| 'no-clip' \| 'round' \| 'circle'`                            | `'clip'`            | 形状                             |
| `size`             | `'sm' \| 'md' \| 'lg' \| number`                                        | `'md'`              | 尺寸                             |
| `color`            | `string`                                                                | `''`                | 自定义颜色（优先级高于 type）    |
| `buttonVariant`    | `'solid' \| 'outline' \| 'ghost' \| 'neon' \| 'semi'`                   | `'solid'`           | 页码按钮变体（CpButton variant） |
| `totalTemplate`    | `string`                                                                | `'共 {total} 条'`   | 总条数文案模板                   |
| `sizeTemplate`     | `string`                                                                | `'{size} 条/页'`    | 每页条数文案模板                 |

**Layout 可选模块：** `total`, `sizes`, `prev`, `pager`, `next`, `jumper`, `spacer`

> `spacer` 渲染 `flex: 1` 占位元素，实现左右分离布局。

### 事件

| 事件名               | 参数             | 说明         |
| -------------------- | ---------------- | ------------ |
| `update:currentPage` | `(page: number)` | 页码变化     |
| `update:pageSize`    | `(size: number)` | 每页条数变化 |
| `change`             | `(page: number)` | 页码变化     |
| `sizeChange`         | `(size: number)` | 每页条数变化 |

### 插槽

| 名称         | 作用域参数                                                             | 说明       |
| ------------ | ---------------------------------------------------------------------- | ---------- |
| `prev`       | `{ disabled, onClick, currentPage, type, color, shape, size }`         | 上一页按钮 |
| `next`       | `{ disabled, onClick, currentPage, type, color, shape, size }`         | 下一页按钮 |
| `pager`      | `{ pages, currentPage, pageCount, onPageClick, onEllipsisClick, ... }` | 整个页码区 |
| `pager-item` | `{ page, active, disabled, onClick, type, color, buttonVariant }`      | 单个页码项 |
| `ellipsis`   | `{ disabled, onClick, type, color, buttonVariant }`                    | 省略号按钮 |
| `sizes`      | `{ pageSize, pageSizes, options, onChange, disabled, ... }`            | 页数选择器 |
| `jumper`     | `{ pageCount, disabled, onJump, type, color, shape, size }`            | 跳转器     |

### CSS 变量

| 变量                          | 默认值 (md) | 说明               |
| ----------------------------- | ----------- | ------------------ |
| `--cp-pagination-section-gap` | `10px`      | 各大控件之间的间距 |
| `--cp-pagination-pager-gap`   | `10px`      | 页码项之间的间距   |
| `--cp-pagination-height`      | `32px`      | 组件高度           |
| `--cp-pagination-btn-size`    | `32px`      | 按钮尺寸           |
| `--cp-pagination-font-size`   | `13px`      | 字体大小           |
| `--cp-pagination-clip`        | `5px`       | 切角大小           |
| `--cp-pagination-color`       | -           | 主题色             |
| `--cp-pagination-sizes-width` | `115px`     | Sizes 下拉宽度     |

### 示例

```vue
<!-- 基础用法 -->
<CpPagination
  v-model:currentPage="page"
  v-model:pageSize="size"
  :total="200"
  layout="total, sizes, prev, pager, next, jumper"
  type="primary"
/>

<!-- Spacer 左右分离 -->
<CpPagination
  v-model:currentPage="page"
  :total="200"
  layout="total, sizes, spacer, prev, pager, next, jumper"
  type="primary"
/>
```

---

## usePagination Hook

独立于 UI 的分页逻辑 Hook，可搭配任意 Table/列表使用。

### 参数

| 选项              | 类型          | 默认值 | 说明         |
| ----------------- | ------------- | ------ | ------------ |
| `defaultPage`     | `number`      | `1`    | 初始页码     |
| `defaultPageSize` | `number`      | `10`   | 初始每页条数 |
| `total`           | `Ref<number>` | -      | 总数据量     |

### 返回值

| 属性               | 类型                                   | 说明         |
| ------------------ | -------------------------------------- | ------------ |
| `currentPage`      | `Ref<number>`                          | 当前页码     |
| `pageSize`         | `Ref<number>`                          | 每页条数     |
| `pageCount`        | `ComputedRef<number>`                  | 总页数       |
| `total`            | `Ref<number>`                          | 总条数       |
| `isFirstPage`      | `ComputedRef<boolean>`                 | 是否首页     |
| `isLastPage`       | `ComputedRef<boolean>`                 | 是否末页     |
| `prev()`           | `() => void`                           | 上一页       |
| `next()`           | `() => void`                           | 下一页       |
| `goto(page)`       | `(page: number) => void`               | 跳转到指定页 |
| `slicedData(data)` | `(data: Ref<T[]>) => ComputedRef<T[]>` | 自动切片数据 |

### 示例

```vue
<script setup>
import { ref, computed } from 'vue'
import { usePagination } from '@cyberpunk-vue/hooks'
import { CpPagination } from '@cyberpunk-vue/components'

const allData = ref([...])
const { currentPage, pageSize, total, slicedData } = usePagination({
  defaultPageSize: 10,
  total: computed(() => allData.value.length),
})
const tableData = slicedData(allData)
</script>

<template>
  <MyTable :data="tableData" />
  <CpPagination
    v-model:currentPage="currentPage"
    v-model:pageSize="pageSize"
    :total="total"
    layout="total, sizes, spacer, prev, pager, next"
  />
</template>
```
