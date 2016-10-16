import { Component } from '@angular/core';

@Component({
  selector: 'slice',
  templateUrl: 'app/pipes/slice/slice.component.html'
})
export class SliceComponent {
  sliceString: string = '';
  sliceArray: any = ['one', 'two', 'three'];
}
