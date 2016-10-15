import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import { fromEvent } from 'rxjs/observable/fromEvent';
// import { interval } from 'rxjs/observable/interval';


@Component({
  selector: 'pipes',
  templateUrl: 'app/pipes/pipes.component.html',
  styleUrls: ['app/pipes/pipes.component.css']
})
export class PipesComponent implements AfterViewInit {
  lowerCase: string = 'Hi, Folks!';
  upperCase: string = 'Hi, Folks!';
  pi: number = 3.141592654;
  percent: number = 0.141592654;
  date: number = Date.now();
  sliceString: string = '';

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
  
  constructor() {};

  checkLength(e) {
    if (e.currentTarget.value.length > 15) {
      e.preventDefault();
    }
  }
}
