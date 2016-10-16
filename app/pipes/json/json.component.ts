import { Component } from '@angular/core';

@Component({
  selector: 'json',
  templateUrl: 'app/pipes/json/json.component.html'
})
export class JsonComponent {
  object: any = {
    "name": "Bob",
    "age": 67,
    "tel": 2345677
  };
}
