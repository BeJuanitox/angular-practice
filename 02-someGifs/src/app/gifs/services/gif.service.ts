import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey : string = '21mILHlQddwmCVGBjUALb579ctTjiInp';
  private _history: string[] = [];
  public results: any[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {

    this._history = JSON.parse(sessionStorage.getItem('history')!) || [] ;
    this.results = JSON.parse(sessionStorage.getItem('results')!) || [] ;
  
  }

  searchGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10);

      sessionStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=21mILHlQddwmCVGBjUALb579ctTjiInp&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        sessionStorage.setItem('results', JSON.stringify(this.results));
      })
    
  }

}