import { Component } from '@angular/core';

@Component({
  selector: 'decimal-percent',
  templateUrl: 'app/pipes/decimal-percent/decimal-percent.component.html'
})
export class DecimalPercentComponent {
  pi: number = 3.141592654;
  percent: number = 0.141592654;
}
