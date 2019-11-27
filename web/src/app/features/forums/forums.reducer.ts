import { Action, createReducer, on } from '@ngrx/store';
import * as ForumsActions from './forums.actions';

export const forumsFeatureKey = 'forums';

export interface State {

}

export const initialState: State = {

};

const forumsReducer = createReducer(
  initialState,

  on(ForumsActions.loadForumss, state => state),
  on(ForumsActions.loadForumssSuccess, (state, action) => state),
  on(ForumsActions.loadForumssFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return forumsReducer(state, action);
}
