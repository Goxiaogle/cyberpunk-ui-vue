---
name: components-navigation
description: 导航组件的详细属性参考：Menu、MenuItem、SubMenu、MenuItemGroup、MenuNav。
---

# 导航组件属性参考

## CpMenu 菜单

赛博朋克风格导航菜单，支持水平/垂直模式、折叠、手风琴。

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
