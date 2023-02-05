import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../interfaces/rl.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() new: Car = {
    name: '',
    iq: 0
  }

  @Output() onNewCharacter: EventEmitter<Car> = new EventEmitter();
 
  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.new);

    this.new = {
      name: '',
      iq: 0
    }
  }
}
