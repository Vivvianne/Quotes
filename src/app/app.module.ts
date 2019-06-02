import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { AppRoutingModule } from  './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    FormDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
