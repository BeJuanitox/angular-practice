import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
        this.items = [
            {
                label: 'Pipes of Angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Texts and dates',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: 'numbers'
                    },
                    {
                        label: 'No commons',
                        icon: 'pi pi-globe',
                        routerLink: 'no-commons'
                    }
                ]
            },
            {
                label: 'Personality Pipes',
                icon: 'pi pi-cog'
            }
        ];
  }

}
