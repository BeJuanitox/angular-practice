import { Component, Input } from '@angular/core';

import { Car } from '../interfaces/rl.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent   {

  @Input('data') cars: Car[] = [];

}
