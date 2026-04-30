<script setup lang="ts">
import { computed } from 'vue'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import PickerBase from '@cyberpunk-vue/components/date-picker/src/base-picker.vue'
import { timePickerEmits, timePickerProps } from './time-picker'

defineOptions({
  name: `${COMPONENT_PREFIX}TimePicker`,
})

const props = defineProps(timePickerProps)
const emit = defineEmits(timePickerEmits)
const timeType = computed(() => (props.type === 'timerange' ? 'timerange' : 'time'))
</script>

<template>
  <PickerBase
    v-bind="props"
    :type="timeType"
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
    <template v-if="$slots.footer" #footer="scope">
      <slot name="footer" v-bind="scope" />
    </template>
  </PickerBase>
</template>
