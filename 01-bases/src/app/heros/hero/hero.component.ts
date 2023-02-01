import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})

export class HeroComponent {
  name: string = 'Goku';
  age: number = 45;

  get nameCapitalized() {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }
}