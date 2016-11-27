import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import fromEvent from 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'async',
  templateUrl: 'app/pipes/custom/custom.component.html'
})
export class CustomComponent implements AfterViewInit {
  $start_click: Observable<any>;
  $stop_click: Observable<any>;
  $num_stream: Observable<any>;
  newVal: string = '';
  isFruit: boolean = false;
  mutate: boolean = false;

  arr: any = [{
      name: 'Potato',
      isFruit: false
    }, {
      name: 'Apple',
      isFruit: true
    }
  ];

  ngAfterViewInit() {
    this.$start_click = Observable.fromEvent(document.getElementById('start_btn'), 'click');
    this.$stop_click = Observable.fromEvent(document.getElementById('stop_btn'), 'click');
    this.$num_stream = this.$start_click.switchMap(() => {
      return Observable.interval(500).takeUntil(this.$stop_click);
    });
  }

  addToArr() {
    let item = {
      name: this.newVal,
      isFruit: this.isFruit
    };
    if (this.mutate) {
      this.arr.push(item);
    } else {
      this.arr = this.arr.concat(item);
    }

    this.newVal = '';
  }

  reset() {
    this.arr = this.arr.slice();
  }
}


