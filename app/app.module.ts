import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PipesComponent }  from './pipes/pipes.component';

@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot([
      { path: 'pipes', component: PipesComponent },
      { path: '', redirectTo: '/pipes', pathMatch: 'full' }
    ])],
  declarations: [ AppComponent, PipesComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }