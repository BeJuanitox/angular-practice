import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  
  term: string = '';
  thereWrong: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string){
    this.thereWrong = false;
    this.term = term;
    
    this.countryService.searchCapital(term).subscribe(countries=>{
      this.countries = countries;
    }, (wrong) => {
      this.thereWrong = true;
      this.countries = [];
    });
  }

  suggestion(term: string){
    this.thereWrong = false;
    //Crea sugerenfcia. 
  }
  
}
