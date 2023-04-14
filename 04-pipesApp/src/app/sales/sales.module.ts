import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsComponent } from './pages/basics/basics.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
