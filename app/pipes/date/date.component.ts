import { Component } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html'
})
export class DateComponent {
  date: number = Date.now();

  checkLength(e: any) {
    if (e.currentTarget.value.length > 15) {
      e.preventDefault();
    }
  }
}
