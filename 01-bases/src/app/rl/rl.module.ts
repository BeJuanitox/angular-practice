import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CarsComponent } from './cars/cars.component';
import { AddComponent } from './add/add.component';
import { RlService } from './services/rl.service';


@NgModule({
  declarations: [
    MainPageComponent,
    CarsComponent,
    AddComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RlService
  ]
})
export class RlModule { }
