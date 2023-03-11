import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private CountryService: CountryService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id);
      this.CountryService.getCountryByAlpha(id).subscribe(country => {
        console.log(country);
      })
    })

  }

}
