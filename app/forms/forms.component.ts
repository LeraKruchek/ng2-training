import { Component } from '@angular/core';

@Component({
    selector: 'forms',
    templateUrl: 'app/forms/forms.component.html'
})
export class FormsComponent {
    routes: any = [{
        path: './template-driven',
        active: true,
        name: 'Template driven'
    }, {
        path: './model-driven',
        active: false,
        name: 'Model driven'
    }];

    constructor() {};

    setActiveRoute(i: number) {
        this.routes.forEach((v: any, ind: number, arr: any) => {
            arr[ind].active = i === ind;
        })
    }
}
