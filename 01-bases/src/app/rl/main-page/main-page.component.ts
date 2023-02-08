import { Component } from '@angular/core';

import { Car } from '../interfaces/rl.interface';
// import { RlService } from '../services/rl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  new: Car = {
    name: 'Nissan Skyline',
    iq: 450 
  }

  // get cars():Car[] {
  //   return this.rlService.cars;
  // }

  // addNewCharacter(arg: Car) {
  //   // debugger; ó F5/Chrome (En lo personal no me dió).
  //   this.cars.push(arg);
  // }

  constructor(  ) {
    // (private rlService: RlService)
  }

}
