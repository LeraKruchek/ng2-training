import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { deepCopy } from '../../utils/deep-copy';

@Component({
    selector: 'template-driven',
    templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent {
    people: any[];
    genders: string[];
    formModel;
    value;

    @ViewChild('form') public userForm: NgForm;

    constructor() {
        this.people = [{
            person: {name: 'Alex', age: 60, gender: 'male'},
            address: {email: 'alex@mymail.com', city: 'Minsk'}
        }];
        this.genders = ['male', 'female'];
        this.formModel = {person: {}, address: {}};
    }

    nameExists(name) {
        return this.people.some(item => {
            return item.person.name === name;
        })
    }

    ngOnInit() {
        console.log(this.userForm)
    }

    setFormModel(p) {
        this.formModel = deepCopy(p);
    }

    submit(form) {
        if (!this.nameExists(form.value.person.name)) {
            this.value = form.value;
            this.people.push(deepCopy(form.value));
            form.resetForm();

        } else {
            alert('Already exists');
        }
    }

    addNew() {
        this.formModel = {person: {}, address: {}};
    }
}
