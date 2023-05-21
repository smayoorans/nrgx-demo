import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ageReducer, counterReducer } from './counter.reducers';

export interface State {

}

export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    age: ageReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
