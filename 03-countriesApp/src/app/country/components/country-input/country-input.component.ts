import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(vlr => {
      this.onDebounce.emit(vlr);
    });
  }

  search(){
    this.onEnter.emit(this.term);
  }

  keyPressed(){
    this.debouncer.next(this.term);
  }

}
