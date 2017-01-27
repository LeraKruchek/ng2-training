import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <ul class="nav nav-pills" style="margin-bottom: 30px">
          <!--<li role="presentation">-->
            <!--<a routerLink="pipes" routerLinkActive="active">Pipes</a>-->
          <!--</li>    -->
          <li role="presentation">
            <a routerLink="forms" routerLinkActive="active">Forms</a>
          </li>
        </ul>
        <router-outlet></router-outlet>
    `,
     styleUrls: ['./styles/common-styles.scss'],
     encapsulation: ViewEncapsulation.None

})
export class AppComponent { }
