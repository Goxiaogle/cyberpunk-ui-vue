<script setup lang="ts">
/**
 * MenuNavTree — 递归渲染内部组件
 *
 * 用于 CpMenuNav 内部递归生成嵌套子菜单。
 * 非对外暴露组件。
 */
import { CpMenuItem } from '../../menu-item'
import { CpSubMenu } from '../../sub-menu'
import { CpMenuItemGroup } from '../../menu-item-group'
import type { MenuNavItem } from './menu-nav'

defineOptions({ name: 'MenuNavTree' })

defineProps<{
  items: MenuNavItem[]
}>()

const isGroupItem = (item: MenuNavItem) => !!item.group
</script>

<template>
  <template v-for="item in items" :key="item.index || item.group">
    <!-- 分组 -->
    <CpMenuItemGroup v-if="isGroupItem(item)" :title="item.group!">
      <template v-for="child in item.children" :key="child.index">
        <CpSubMenu
          v-if="child.children && child.children.length"
          :index="child.index"
          :icon="child.icon"
          :disabled="child.disabled"
        >
          <template #title>{{ child.label }}</template>
          <menu-nav-tree :items="child.children" />
        </CpSubMenu>
        <CpMenuItem
          v-else
          :index="child.index"
          :icon="child.icon"
          :disabled="child.disabled"
          :route="child.route"
        >
          {{ child.label }}
        </CpMenuItem>
      </template>
    </CpMenuItemGroup>

    <!-- 子菜单 -->
    <CpSubMenu
      v-else-if="item.children && item.children.length"
      :index="item.index"
      :icon="item.icon"
      :disabled="item.disabled"
    >
      <template #title>{{ item.label }}</template>
      <menu-nav-tree :items="item.children" />
    </CpSubMenu>

    <!-- 菜单项 -->
    <CpMenuItem
      v-else
      :index="item.index"
      :icon="item.icon"
      :disabled="item.disabled"
      :route="item.route"
    >
      {{ item.label }}
    </CpMenuItem>
  </template>
</template>
