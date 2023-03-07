import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';

  constructor(private countryService: CountryService) { }

  search(){
    this.countryService.searchCountry(this.term).subscribe(resp=>{
      console.log(resp);
    });
  }

}
