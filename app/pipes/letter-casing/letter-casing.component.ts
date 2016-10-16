import { Component } from '@angular/core';

@Component({
  selector: 'letter-casing',
  templateUrl: 'app/pipes/letter-casing/letter-casing.component.html'
})
export class LetterCasingComponent {
  lowerCase: string = 'Hi, Folks!';
  upperCase: string = 'Hi, Folks!';
}
