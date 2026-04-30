<script setup lang="ts">
import { computed } from 'vue'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import PickerBase from './base-picker.vue'
import { pickerEmits, pickerProps } from './picker'

defineOptions({
  name: `${COMPONENT_PREFIX}DatePickerSelect`,
})

const props = defineProps(pickerProps)
const emit = defineEmits(pickerEmits)
const dateType = computed(() => props.type)
</script>

<template>
  <PickerBase
    v-bind="props"
    :type="dateType"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
    @clear="emit('clear')"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
    @visible-change="emit('visibleChange', $event)"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
    <template v-if="$slots.cell" #cell="{ cell }">
      <slot name="cell" :cell="cell" />
    </template>
    <template v-if="$slots.footer" #footer="scope">
      <slot name="footer" v-bind="scope" />
    </template>
  </PickerBase>
</template>
