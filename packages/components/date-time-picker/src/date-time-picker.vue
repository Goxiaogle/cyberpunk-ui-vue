<script setup lang="ts">
import { computed } from 'vue'
import { COMPONENT_PREFIX } from '@cyberpunk-vue/constants'
import PickerBase from '@cyberpunk-vue/components/date-picker/src/base-picker.vue'
import { dateTimePickerEmits, dateTimePickerProps } from './date-time-picker'

defineOptions({
  name: `${COMPONENT_PREFIX}DateTimePicker`,
})

const props = defineProps(dateTimePickerProps)
const emit = defineEmits(dateTimePickerEmits)
const dateTimeType = computed(() => (props.type === 'datetimerange' ? 'datetimerange' : 'datetime'))
</script>

<template>
  <PickerBase
    v-bind="props"
    :type="dateTimeType"
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
