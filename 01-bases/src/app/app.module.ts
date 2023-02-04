import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosModule } from './heros/heros.module';
import { AccountantsModule } from './accountants/accountants.module';
import { RlModule } from './rl/rl.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    AccountantsModule,
    RlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
