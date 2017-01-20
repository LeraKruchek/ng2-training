import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { deepCopy } from '../../utils/deep-copy';
import { validateEmail } from '../validators/email.validator';
import { validateAsync } from '../validators/async.validator';

@Component({
    selector: 'model-driven',
    templateUrl: 'app/forms/model-driven/model-driven.component.html'
})
export class ModelDrivenComponent implements OnInit {
    people: any[];
    genders: any[];
    value;
    current;
    formGroup: FormGroup;
    errors: any;

    constructor(private formBuilder: FormBuilder) {
        this.people = [{person: {name: 'Alex', age: 60, gender: 'male'}, address: {email: 'alex@mymail.com', city: 'Minsk'}}];
        this.genders = ['male', 'female'];
        this.errors = {required: 'This field is required'};
        this.current = {person: {}, address: {}};
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
        })
    }

    setFormModel(p) {
        this.current = p;
        this.formGroup.setValue(deepCopy(p));
    }

    submit(form) {
        if (this.current.person.name === form.person.name) {
            this.current = deepCopy(form);
        } else {
            this.people.push(deepCopy(form))
        }
        this.value = form;
    }

    addNew() {
        this.formGroup.reset();
        this.current = {person: {}, address: {}};
    }
}
