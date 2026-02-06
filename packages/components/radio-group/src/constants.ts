import type { InjectionKey, Ref } from 'vue'
import type { RadioValueType, RadioType, RadioSize } from '../../radio/src/radio'

export interface RadioGroupContext {
  modelValue: Ref<RadioValueType | undefined>
  disabled: Ref<boolean>
  size: Ref<RadioSize>
  type: Ref<RadioType>
  name: Ref<string>
  handleChange: (value: RadioValueType) => void
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContext')
