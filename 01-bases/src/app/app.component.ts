import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';
  number: number = 10;
  base: number = 5;

  /*add () {
    this.number += 1;
  }

  substract () {
    this.number -= 1;
  }*/
  
  accumulate (vlr: number) {
    this.number += vlr;
  }

}
