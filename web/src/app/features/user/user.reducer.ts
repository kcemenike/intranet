

import { createReducer, on } from '@ngrx/store';
import { UserConfigContract, USER_CONFIG } from './user.config';
import * as fromActions from './user.actions';

export const userFeatureKey = 'user';

export type State = UserConfigContract

export const initialState: State = USER_CONFIG

export function reducer(state: State, action): State {
  return createReducer(initialState,
    on(fromActions.Initialise, (state) => state),
    // on(fromActions.SignInStart, (state, user) => { return { ...state, user } }),
  )(state, action)
}
