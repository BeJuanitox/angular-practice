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
  
  new:Car = {
    name: 'Scarab',
    iq: 90000
  }

  changeName(e: any) {
    console.log(e)
  }
  
  add() {
    console.log(this.new);
  }
}

