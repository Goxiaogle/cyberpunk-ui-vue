<script setup lang="ts">
/**
 * CpTableColumn - 表格列定义组件
 * 通过 inject 注册到父 CpTable，无实际 DOM 渲染
 */
import { inject, onMounted, onBeforeUnmount, useSlots, getCurrentInstance } from 'vue'
import { tableColumnProps } from './table-column'
import { COMPONENT_PREFIX, TABLE_CONTEXT_KEY } from '@cyberpunk-vue/constants'

defineOptions({
  name: `${COMPONENT_PREFIX}TableColumn`,
})

const props = defineProps(tableColumnProps)
const slots = useSlots()

const tableContext = inject(TABLE_CONTEXT_KEY, null)

let columnId = ''

onMounted(() => {
  if (tableContext) {
    columnId = tableContext.registerColumn({
      prop: props.prop,
      label: props.label,
      width: props.width,
      minWidth: props.minWidth,
      sortable: props.sortable,
      columnType: props.type,
      align: props.align,
      headerAlign: props.headerAlign,
      slots: {
        default: slots.default,
        header: slots.header,
      },
    })
  }
})

onBeforeUnmount(() => {
  if (tableContext && columnId) {
    tableContext.unregisterColumn(columnId)
  }
})
</script>

<template>
  <!-- CpTableColumn 无实际渲染，仅用于声明式配置 -->
</template>
