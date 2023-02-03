import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosModule } from './heros/heros.module';
import { AccountantsModule } from './accountants/accountants.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    AccountantsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
