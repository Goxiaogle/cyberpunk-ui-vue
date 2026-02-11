<script setup lang="ts">
/**
 * CpAside - 侧边栏容器
 * 边缘嵌入 CpDivider (vertical)，支持 dividerType / dividerColor / dividerVariant 控制分割线
 */
import { computed } from 'vue'
import { useNamespace } from '@cyberpunk-vue/hooks'
import { asideProps } from './container'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import CpDivider from '../../divider/src/divider.vue'

defineOptions({
  name: `${COMPONENT_PREFIX}Aside`,
})

const props = defineProps(asideProps)
const ns = useNamespace('aside')

const style = computed(() => ({
  '--cp-aside-width': props.width,
}))

const dividerProps = computed(() => ({
  direction: 'vertical' as const,
  type: props.dividerType,
  color: props.dividerColor,
  variant: props.dividerVariant,
  margin: 0,
}))

// 分割线位置：左侧边栏在右边显示分割线，右侧边栏在左边
const isRight = computed(() => props.position === 'right')
</script>

<template>
  <aside
    :class="[ns.b(), ns.is(props.position)]"
    :style="style"
    :data-position="props.position"
  >
    <CpDivider v-if="isRight" v-bind="dividerProps" :class="ns.e('divider')" />
    <div :class="ns.e('content')">
      <slot />
    </div>
    <CpDivider v-if="!isRight" v-bind="dividerProps" :class="ns.e('divider')" />
  </aside>
</template>
