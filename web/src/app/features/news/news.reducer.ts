import { Action, createReducer, on } from '@ngrx/store';
import * as NewsActions from './news.actions';

export const newsFeatureKey = 'news';

export interface State {

}

export const initialState: State = {

};

const newsReducer = createReducer(
  initialState,

  on(NewsActions.loadNewss, state => state),
  on(NewsActions.loadNewssSuccess, (state, action) => state),
  on(NewsActions.loadNewssFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return newsReducer(state, action);
}
