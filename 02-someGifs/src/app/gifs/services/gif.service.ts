import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey : string = '21mILHlQddwmCVGBjUALb579ctTjiInp';
  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  searchGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=21mILHlQddwmCVGBjUALb579ctTjiInp&q=dragon ball z&limit=10')
      .subscribe((resp: any) => {
        console.log(resp.data);
      })
    
  }

}
