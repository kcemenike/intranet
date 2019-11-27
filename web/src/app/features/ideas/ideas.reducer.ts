import { Action, createReducer, on } from '@ngrx/store';
import * as IdeasActions from './ideas.actions';

export const ideasFeatureKey = 'ideas';

export interface State {

}

export const initialState: State = {

};

const ideasReducer = createReducer(
  initialState,

  on(IdeasActions.loadIdeass, state => state),
  on(IdeasActions.loadIdeassSuccess, (state, action) => state),
  on(IdeasActions.loadIdeassFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return ideasReducer(state, action);
}
