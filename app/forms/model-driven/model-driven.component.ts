import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { deepCopy } from '../../utils/deep-copy';
import { validateEmail } from '../validators/email.validator';
import { validateAsync } from '../validators/async.validator';

@Component({
    selector: 'model-driven',
    templateUrl: './model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit {
    people: any[];
    genders: string[];
    value;
    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.people = [{
            person: {
                name: 'Alex',
                age: 60,
                gender: 'male'
            },
            address: {
                email: 'alex@mymail.com',
                city: 'Minsk'
            }
        }];
        this.genders = ['male', 'female'];
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            person: this.formBuilder.group({
                name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)], validateAsync],
                age: [null, Validators.required],
                gender: ['male']
            }),
            address: this.formBuilder.group({
                city: ['', Validators.required],
                email: ['', [validateEmail, Validators.required]]
            })
        });

        this.formGroup.valueChanges.subscribe(value => console.log(value))
    }

    nameExists(name) {
        return this.people.some(item => {
            return item.person.name === name;
        })
    }

    setFormModel(p) {
        this.formGroup.setValue(deepCopy(p));
    }

    submit(form) {
        if (!this.nameExists(form.value.person.name)) {
            this.value = form.value;
            this.people.push(deepCopy(form.value));
            form.reset();
        } else {
            alert('Already exists');
        }
    }

    addNew() {
        this.formGroup.reset();
    }

    setRadioValue() {
        let control = this.formGroup.get('person').get('gender');
        let value = control.value === 'male' ? 'female' : 'male';

        control.setValue(value);
    }

    toggleRadioDisabled() {
        let control = this.formGroup.get('person').get('gender');

        control.disabled ? control.enable() : control.disable();
    }
}
