import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }
  
  getCSSClass(region: string) {
    return  (region === this.activeRegion) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activateRegion(region: string) {

    if (region === this.activeRegion) {return;}

    this.activeRegion = region;
    this.countries = [];
    
    this.countryService.searchRegion(region).subscribe(countries => this.countries = countries);
  }

}
