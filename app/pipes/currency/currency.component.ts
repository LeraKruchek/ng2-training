import { Component } from '@angular/core';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html'
})
export class CurrencyComponent {
  currency: number = 3.141592654;
}
