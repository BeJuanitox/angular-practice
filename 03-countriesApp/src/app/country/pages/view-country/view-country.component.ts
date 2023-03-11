import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.countryService.getCountryByAlpha(param['id']) ),
        tap(console.log)
      )
      .subscribe(country => this.country = country);

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.CountryService.getCountryByAlpha(id).subscribe(country => {
    //     console.log(country);
    //   });
    // });
  }

}
