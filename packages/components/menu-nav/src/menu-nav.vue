<script setup lang="ts">
/**
 * CpMenuNav — 数据驱动的导航菜单
 *
 * 接收 MenuNavItem[] 数据自动递归生成嵌套菜单结构。
 * 有 children → SubMenu，有 group → MenuItemGroup，否则 → MenuItem
 */
import { useNamespace } from '@cyberpunk-vue/hooks'
import { CpMenu } from '../../menu'
import { CpMenuItem } from '../../menu-item'
import { CpSubMenu } from '../../sub-menu'
import { CpMenuItemGroup } from '../../menu-item-group'
import MenuNavTree from './menu-nav-tree.vue'
import { menuNavProps, menuNavEmits } from './menu-nav'
import type { MenuNavItem } from './menu-nav'

defineOptions({ name: 'CpMenuNav' })

const props = defineProps(menuNavProps)
const emit = defineEmits(menuNavEmits)

const handleSelect = (index: string, indexPath: string[]) => {
  emit('select', index, indexPath)
}

const handleOpen = (index: string, indexPath: string[]) => {
  emit('open', index, indexPath)
}

const handleClose = (index: string, indexPath: string[]) => {
  emit('close', index, indexPath)
}

/**
 * 判断一组数据是否为分组模式
 * 当 item 有 group 属性时，视为分组
 */
const isGroupItem = (item: MenuNavItem) => !!item.group
</script>

<template>
  <CpMenu
    :mode="mode"
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
    :unique-opened="uniqueOpened"
    :collapse="collapse"
    :type="type"
    :color="color"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :router="router"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in data" :key="item.index || item.group">
      <!-- 分组模式 -->
      <CpMenuItemGroup v-if="isGroupItem(item)" :title="item.group!">
        <template v-for="child in item.children" :key="child.index">
          <!-- 分组内嵌套子菜单 -->
          <CpSubMenu
            v-if="child.children && child.children.length"
            :index="child.index"
            :icon="child.icon"
            :disabled="child.disabled"
          >
            <template #title>{{ child.label }}</template>
            <!-- 递归渲染使用递归组件 -->
            <menu-nav-tree :items="child.children" />
          </CpSubMenu>
          <!-- 分组内普通菜单项 -->
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

      <!-- 子菜单模式 -->
      <CpSubMenu
        v-else-if="item.children && item.children.length"
        :index="item.index"
        :icon="item.icon"
        :disabled="item.disabled"
      >
        <template #title>{{ item.label }}</template>
        <menu-nav-tree :items="item.children" />
      </CpSubMenu>

      <!-- 普通菜单项 -->
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
  </CpMenu>
</template>
