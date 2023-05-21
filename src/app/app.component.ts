import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement, DecrementAge, Increment, IncrementAge, ResetCounter } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor(private store: Store<any>){

  }

 
  onIncrement() {
    this.store.dispatch(new Increment());
    this.store.dispatch(new IncrementAge());
  }

  onDecrement() {
    this.store.dispatch(new Decrement());
    this.store.dispatch(new DecrementAge());
  }

  onReset() {
    let x = 100;
    this.store.dispatch(new ResetCounter(x));
  }
}
