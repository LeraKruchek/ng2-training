import { Component } from '@angular/core';

@Component({
  selector: 'slice',
  templateUrl: './slice.component.html'
})
export class SliceComponent {
  sliceString: string = '';
  sliceArray: any = ['one', 'two', 'three'];
}
