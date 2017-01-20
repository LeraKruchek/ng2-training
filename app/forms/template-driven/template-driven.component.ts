import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { deepCopy } from '../../utils/deep-copy';

@Component({
    selector: 'template-driven',
    templateUrl: 'app/forms/template-driven/template-driven.component.html'
})
export class TemplateDrivenComponent {
    people: any[];
    genders: any[];
    formModel;
    value;
    current;
    @ViewChild('form') public userForm: NgForm;

    constructor() {
        this.people = [{
            person: {name: 'Alex', age: 60, gender: 'male'},
            address: {email: 'alex@mymail.com', city: 'Minsk'}
        }];
        this.genders = ['male', 'female'];
        this.formModel = {person: {}, address: {}};
        this.current = {person: {}, address: {}};
    }

    ngOnInit() {
        console.log(this.userForm)
    }

    setFormModel(p) {
        this.current = p;
        this.formModel = deepCopy(p);
    }

    submit(form) {
        if (this.current.person.name === this.formModel.person.name) {
            this.current = deepCopy(this.formModel);
        } else {
            this.people.push(deepCopy(this.formModel))
        }
        this.value = form;
    }

    addNew() {
        this.formModel = {person: {}, address: {}};
        this.current = {person: {}, address: {}};
    }
}
