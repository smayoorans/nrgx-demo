import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAge, selectCounter } from '../counter.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myCounter;
  myAge: number;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.store.select(selectCounter).subscribe((data => {
    //   this.myCounter = data;
    // }));

    this.store.pipe(select(selectCounter)).subscribe((data => {
      this.myCounter = data;
    }));


    // this.store.select(selectAge).subscribe((data => {
    //   this.myAge = data;
    // }))

    this.store.pipe(select(selectAge)).subscribe((data => {
      this.myAge = data;
    }));
  }

}
