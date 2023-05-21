
import { CounterActionTypes, CounterActionsUnion } from "../actions/counter.actions";


export function counterReducer(state: number = 0, action: CounterActionsUnion): number {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return state + 1;
    }

    case CounterActionTypes.DECREMENT: {
      return state - 1;
    }

    case CounterActionTypes.RESET_COUNTER: {
      return action.y;
    }
    
    default: {
      return state;
    }
  }
}


export function ageReducer(state: number = 0, action: CounterActionsUnion): number {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_AGE: {
      return state + 10;
    }

    case CounterActionTypes.DECREMENT_AGE: {
      return state - 10;
    }
    
    default: {
      return state;
    }
  }
}