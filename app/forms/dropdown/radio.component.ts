import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const CUSTOM_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
};

@Component({
   selector: 'radio',
   template: `
       <label *ngFor="let item of items" class="radio-inline">
         <input type="radio"
           (change)="setValue($event)"
           [value]="item"
           [checked]="value === item"
           name="{{nameOption}}">
             {{item}}
       </label>`,
   providers: [CUSTOM_RADIO_VALUE_ACCESSOR]
})
export class RadioComponent implements ControlValueAccessor {
    @Input() items: string[];
    @Input() nameOption: string;

    currentValue: any;

    setValue(item) {
        this.value = item.target.value;
    }

    set value(newValue) {
        if (newValue) {
            this.currentValue = newValue;
            this.onChange(newValue);
        }
    }

    get value() {
        return this.currentValue;
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(value: any) {
        if (value !== this.currentValue) {
            this.value = value;
        }
    }
    
    setDisabledState(isDisabled) {
        let warning = isDisabled ? 'radio disabled' : 'radio enabled';
        console.warn(warning);
    }
}
