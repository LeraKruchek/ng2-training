import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { PipesComponent }  from './pipes/pipes.component';
import { LetterCasingComponent } from './pipes/letter-casing/letter-casing.component';
import { DecimalPercentComponent } from './pipes/decimal-percent/decimal-percent.component';
import { DateComponent } from './pipes/date/date.component';
import { SliceComponent } from './pipes/slice/slice.component';
import { AsyncComponent } from './pipes/async/async.component';
import { JsonComponent } from './pipes/json/json.component';
import {ColorPipe} from "custom_pipes/color.pipe";
import {CustomComponent} from "./pipes/custom/custom.component";
import {FruitPipeImpure, FruitPipe} from "custom_pipes/filter.pipe";

@NgModule({
  imports: [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: 'pipes', component: PipesComponent,
        children: [
        { path: 'letter-casing', component: LetterCasingComponent },
        { path: 'decimal-percent', component: DecimalPercentComponent },
        { path: 'date', component: DateComponent },
        { path: 'slice', component: SliceComponent },
        { path: 'async', component: AsyncComponent },
        { path: 'json', component: JsonComponent},
        { path: 'custom', component: CustomComponent }
        ]
      },
      { path: '', redirectTo: '/pipes/letter-casing', pathMatch: 'full' }
    ])],
  declarations: [
    AppComponent,
    LetterCasingComponent,
    DecimalPercentComponent,
    PipesComponent,
    DateComponent,
    SliceComponent,
    AsyncComponent,
    JsonComponent,
    CustomComponent,
    ColorPipe,
    FruitPipe,
    FruitPipeImpure
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
