import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  thereWrong: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(){
    this.thereWrong = false;
    this.countryService.searchCountry(this.term).subscribe(countries=>{
      console.log(countries);
      this.countries = countries;
    }, (wrong) => {
      this.thereWrong = true;
      this.countries = [];
    });
  }

}