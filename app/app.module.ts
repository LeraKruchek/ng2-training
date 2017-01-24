import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import { PipesComponent }  from './pipes/pipes.component';
import { LetterCasingComponent } from './pipes/letter-casing/letter-casing.component';
import { DecimalPercentComponent } from './pipes/decimal-percent/decimal-percent.component';
import { DateComponent } from './pipes/date/date.component';
import { SliceComponent } from './pipes/slice/slice.component';
import { AsyncComponent } from './pipes/async/async.component';
import { JsonComponent } from './pipes/json/json.component';

import {FormsComponent} from './forms/forms.component';
import {TemplateDrivenComponent} from './forms/template-driven/template-driven.component';
import {ModelDrivenComponent} from './forms/model-driven/model-driven.component';
import {DropdownComponent} from './forms/dropdown/dropdown.component';
import {ErrorDisplayComponent} from './forms/error-display/error-display.component';

import {ColorPipe} from "./custom_pipes/color.pipe";
import {CustomComponent} from "./pipes/custom/custom.component";
import {FruitPipeImpure, FruitPipe} from "./custom_pipes/filter.pipe";
import {CurrencyComponent} from "./pipes/currency/currency.component";
import {RepeatCapitalizePipe} from "./custom_pipes/repeat-capitalize";
import {EmailValidator} from "./forms/validators/email.validator.directive";
import {RadioComponent} from "./forms/dropdown/radio.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'pipes', component: PipesComponent,
        children: [
          {path: '', redirectTo: 'letter-casing', pathMatch: 'full' },
        { path: 'letter-casing', component: LetterCasingComponent },
        { path: 'decimal-percent', component: DecimalPercentComponent },
        { path: 'currency', component: CurrencyComponent },
        { path: 'date', component: DateComponent },
        { path: 'slice', component: SliceComponent },
        { path: 'async', component: AsyncComponent },
        { path: 'json', component: JsonComponent},
        { path: 'custom', component: CustomComponent }
        ]
      },
      {
        path: 'forms', component: FormsComponent,
        children: [
          {path: '', redirectTo: 'template-driven', pathMatch: 'full' },
          {path: 'template-driven', component: TemplateDrivenComponent},
          {path: 'model-driven', component: ModelDrivenComponent}
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
    CurrencyComponent,
    FormsComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    DropdownComponent,
    ErrorDisplayComponent,
    EmailValidator,
    RadioComponent,


    ColorPipe,
    FruitPipe,
    FruitPipeImpure,
    RepeatCapitalizePipe
  ],
  providers: [  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
