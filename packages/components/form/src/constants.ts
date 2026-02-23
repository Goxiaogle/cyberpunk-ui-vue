import type { InjectionKey, Ref } from 'vue'
import type { FormRules, LabelPosition, RequireAsteriskPosition } from './form'
import type { Size } from '@cyberpunk-vue/hooks'

export interface FormItemContext {
  prop: string
  validate: (trigger?: string) => Promise<boolean>
  resetField: () => void
  clearValidate: () => void
}

export interface FormContext {
  model: Ref<Record<string, unknown> | undefined>
  rules: Ref<FormRules>
  labelWidth: Ref<string | number>
  labelPosition: Ref<LabelPosition>
  labelSuffix: Ref<string>
  size: Ref<Size>
  disabled: Ref<boolean>
  showMessage: Ref<boolean>
  reserveErrorSpace: Ref<boolean>
  requireAsteriskPosition: Ref<RequireAsteriskPosition>
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContext')
