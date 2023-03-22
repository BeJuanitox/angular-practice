import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  name: string = 'Sebastian';
  value: number = 1500;

  showName() {
    console.log(this.name);
  }

}
