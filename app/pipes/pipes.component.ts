import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: 'app/pipes/pipes.component.html'
})
export class PipesComponent {
  routes: any = [{
    path: './letter-casing',
    active: true,
    name: 'UpperCase / LowerCase'
  }, {
    path: './decimal-percent',
    active: false,
    name: 'Decimal / Percent'
  }, {
    path: './currency',
    active: false,
    name: 'Currency'
  }, {
    path: './date',
    active: false,
    name: 'Date'
  }, {
    path: './slice',
    active: false,
    name: 'Slice'
  }, {
    path: './async',
    active: false,
    name: 'Async'
  }, {
    path: './json',
    active: false,
    name: 'JSON'
  }, {
    path: './custom',
    active: false,
    name: 'Custom'
  }];

  constructor() {};

  setActiveRoute(i: number) {
    this.routes.forEach((v: any, ind: number, arr: any) => {
      arr[ind].active = i === ind;
    })
  }
}
