import type { InjectionKey, Ref } from 'vue';
import type { RadioValueType, RadioType, RadioSize } from '../../radio/src/radio';
export interface RadioGroupContext {
    modelValue: Ref<RadioValueType | undefined>;
    disabled: Ref<boolean>;
    size: Ref<RadioSize>;
    type: Ref<RadioType>;
    handleChange: (value: RadioValueType) => void;
}
export declare const radioGroupContextKey: InjectionKey<RadioGroupContext>;
