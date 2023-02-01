import { Component } from '@angular/core';

@Component({
  selector: 'app-accountant',
  template: `

    <h1> {{ title }} </h1>
    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)="accumulate( -base )"> - {{base}} </button>

    <span> {{ number }} </span>

    <button (click)="accumulate( base )"> + {{base}} </button>

  `
})


export class AccountantComponent {
  title: string = 'Accumulate App';
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
