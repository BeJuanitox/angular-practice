import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../interfaces/rl.interface';

import { RlService } from '../services/rl.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() new: Car = {
    name: '',
    iq: 0
  }

  constructor( private rlService: RlService ) {

  }

  // @Output() onNewCharacter: EventEmitter<Car> = new EventEmitter();
 
  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.new);
    this.rlService.addCar(this.new);

    this.new = {
      name: '',
      iq: 0
    }
  }
}
