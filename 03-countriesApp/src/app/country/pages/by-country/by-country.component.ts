import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class ByCountryComponent {

  term: string = '';
  thereWrong: boolean = false;
  countries: Country[] = [];
  suggestionCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  search(term: string){
    this.showSuggestions = false;
    this.thereWrong = false;
    this.term = term;
    
    this.countryService.searchCountry(term).subscribe(countries=>{
      this.countries = countries;
    }, (wrong) => {
      this.thereWrong = true;
      this.countries = [];
    });
  }

  suggestion(term: string){
    this.thereWrong = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry(term).subscribe(countries => this.suggestionCountries = countries.splice(0, 5), (wrong) => this.suggestionCountries = [] );

  }

  searchSuggestion (term: string) {
    this.search(term);
  }
  
}
