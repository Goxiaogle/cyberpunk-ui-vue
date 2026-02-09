import type { InjectionKey, Ref } from 'vue'
import type { RadioValueType, RadioType, RadioSize } from '../../radio/src/radio'

export interface RadioGroupContext {
  modelValue: Ref<RadioValueType>
  disabled: Ref<boolean>
  size: Ref<RadioSize>
  type: Ref<RadioType>
  handleChange: (value: RadioValueType) => void
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContext')
