import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heros: string[] = ['Goku', 'Vegeta', 'Gohan', 'Bills', 'Wiss', 'Zeno'];
  heroDeleted: string = '';

  deleteHero() {
    this.heroDeleted = this.heros.shift() || '';
    /*this.heros.splice(this.total-1);*/   
  }

}
