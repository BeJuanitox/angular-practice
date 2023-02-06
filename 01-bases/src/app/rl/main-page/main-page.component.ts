import { Component } from '@angular/core';

import { Car } from '../interfaces/rl.interface';
import { RlService } from '../services/rl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  cars: Car[] = [
    {
      name: 'Octane',
      iq: 200
    },
    {
      name: 'Dominus',
      iq: 600
    }
  ];

  new: Car = {
    name: 'Nissan Skyline',
    iq: 450
  }

  addNewCharacter(arg: Car) {
    // debugger; ó F5/Chrome (En lo personal no me dió).
    this.cars.push(arg);
  }

  constructor( private rlService: RlService ) {
    
  }

}

