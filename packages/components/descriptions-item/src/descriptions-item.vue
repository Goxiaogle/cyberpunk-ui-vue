<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, useSlots } from 'vue'
import { COMPONENT_PREFIX, DESCRIPTIONS_CONTEXT_KEY } from '@cyberpunk-vue/constants'
import { descriptionsItemProps } from './descriptions-item'

defineOptions({
  name: `${COMPONENT_PREFIX}DescriptionsItem`,
})

const props = defineProps(descriptionsItemProps)
const slots = useSlots() as Record<string, ((...args: unknown[]) => unknown) | undefined>

const descriptionsContext = inject(DESCRIPTIONS_CONTEXT_KEY, undefined)

let itemId = ''

onMounted(() => {
  if (descriptionsContext) {
    itemId = descriptionsContext.registerItem({
      label: props.label,
      span: props.span,
      labelWidth: props.labelWidth,
      labelAlign: props.labelAlign,
      labelVerticalAlign: props.labelVerticalAlign,
      contentAlign: props.contentAlign,
      contentVerticalAlign: props.contentVerticalAlign,
      labelClassName: props.labelClassName,
      contentClassName: props.contentClassName,
      labelColor: props.labelColor,
      contentColor: props.contentColor,
      type: props.type,
      color: props.color,
      slots: {
        default: slots.default,
        label: slots.label,
      },
    })
  }
})

onBeforeUnmount(() => {
  if (descriptionsContext && itemId) {
    descriptionsContext.unregisterItem(itemId)
  }
})
</script>

<template>
  <!-- CpDescriptionsItem 不直接渲染 DOM，结构由父组件 CpDescriptions 管理 -->
</template>
