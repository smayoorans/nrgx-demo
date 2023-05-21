import { Action } from "@ngrx/store";

export enum CounterActionTypes {
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
    INCREMENT_AGE = '[Age] Increment',
    DECREMENT_AGE = '[Age] Decrement',
    RESET_COUNTER = '[Counter] Reset'
  }

  export class Increment implements Action {
    readonly type = CounterActionTypes.INCREMENT;
  }
  
  export class Decrement implements Action {
    readonly type = CounterActionTypes.DECREMENT;
  }

  export class IncrementAge implements Action {
    readonly type = CounterActionTypes.INCREMENT_AGE;
  }
  
  export class DecrementAge implements Action {
    readonly type = CounterActionTypes.DECREMENT_AGE;
  }

  export class ResetCounter implements Action {
    readonly type = CounterActionTypes.RESET_COUNTER;
    constructor(public y: number) {

    }
  }


  export type CounterActionsUnion = Increment | Decrement | IncrementAge | DecrementAge | ResetCounter;
