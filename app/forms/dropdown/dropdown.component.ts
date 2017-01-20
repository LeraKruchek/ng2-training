import {Component, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

const CUSTOM_DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
};

@Component({
               selector: 'dropdown',
               template: `<select (change)="setValue($event)"  [disabled]="isDisabled">
                             <option *ngFor="let item of items" [ngValue]="item">{{item[labelProperty] || item}}</option>
                          </select>`,
               providers: [CUSTOM_DROPDOWN_VALUE_ACCESSOR]
           })
export class DropdownComponent implements ControlValueAccessor {
    @Input() items: any[];
    @Input() labelProperty: string = 'name';
    @Input() isDisabled: boolean = false;

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

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }

    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    writeValue(value: any) {
        if (value !== this.currentValue) {
            this.currentValue = value;
        }
    }
}
