import { Component, Input } from '@angular/core';

import { Car } from '../interfaces/rl.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() cars:Car [] = [];

  @Input() new: Car = {
    name: '',
    iq: 0
  }

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.cars.push(this.new);
    this.new = {
      name: '',
      iq: 0
    }
  }
}
