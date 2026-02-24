import type { InjectionKey, Ref } from 'vue'
import type { RadioValueType, RadioType, RadioSize } from '@cyberpunk-vue/components/radio/src/radio'

export interface RadioGroupContext {
  modelValue: Ref<RadioValueType | undefined>
  disabled: Ref<boolean>
  size: Ref<RadioSize>
  type: Ref<RadioType>
  handleChange: (value: RadioValueType) => void
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContext')
