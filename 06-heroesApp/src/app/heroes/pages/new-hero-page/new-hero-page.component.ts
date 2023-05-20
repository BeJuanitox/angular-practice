import { Component } from '@angular/core';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent {
  public publishers = [
    { id: 'Dc Comics', desc: 'Dc - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
}
