import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey : string = '21mILHlQddwmCVGBjUALb579ctTjiInp';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
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

    const params = new HttpParams().set('api_key', this.apiKey).set('limit', '10').set('q', query);

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        sessionStorage.setItem('results', JSON.stringify(this.results));
      })
    
  }

}
