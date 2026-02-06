import type { InjectionKey, Ref } from 'vue';
import type { CheckboxValueType, CheckboxType, CheckboxSize } from '../../checkbox/src/checkbox';
export interface CheckboxGroupContext {
    modelValue: Ref<CheckboxValueType[]>;
    disabled: Ref<boolean>;
    size: Ref<CheckboxSize>;
    type: Ref<CheckboxType>;
    min: Ref<number | undefined>;
    max: Ref<number | undefined>;
    handleChange: (value: CheckboxValueType) => void;
}
export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
