import { Component, Input } from '@angular/core';

// import { Car } from '../interfaces/rl.interface';
import { RlService } from '../services/rl.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent   {

  // @Input('data') cars: Car[] = [];

  get cars() {
    return this.rlService.cars;
  }

  constructor( private rlService: RlService ) {
    
  }
  
}
