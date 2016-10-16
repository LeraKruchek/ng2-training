import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async',
  templateUrl: 'app/pipes/async/async.component.html'
})
export class AsyncComponent implements AfterViewInit {
  $start_click: Observable<any>;
  $stop_click: Observable<any>;
  $num_stream: Observable<any>;

  ngAfterViewInit() {
    this.$start_click = Observable.fromEvent(document.getElementById('start_btn'), 'click');
    this.$stop_click = Observable.fromEvent(document.getElementById('stop_btn'), 'click');
    this.$num_stream = this.$start_click.switchMap(() => {
      return Observable.interval(500).takeUntil(this.$stop_click);
    });
  }
}


