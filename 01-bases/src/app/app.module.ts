import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountantComponent } from './accountants/accountant.component';
import { HeroComponent } from './heros/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountantComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
