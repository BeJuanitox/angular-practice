import { NgModule } from "@angular/core";

import { AccountantComponent } from './accountant/accountant.component';

@NgModule({
  declarations: [
    AccountantComponent
  ],
  exports: [
    AccountantComponent
  ]
})
export class AccountantsModule {}
