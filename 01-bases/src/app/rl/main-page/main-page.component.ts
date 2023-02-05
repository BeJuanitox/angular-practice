import { Component } from '@angular/core';

interface Car {
  name: string;
  iq: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
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

