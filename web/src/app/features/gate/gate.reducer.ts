
import * as fromActions from './gate.actions';
import { GateConfigContract, GATE_CONFIG } from './gate.config';
import { createReducer, on } from '@ngrx/store';

export const gateFeatureKey = 'gate';

export type State = GateConfigContract

export const initialState: State = GATE_CONFIG

export function reducer(state: State, action): State {
  return createReducer(initialState,
    on(fromActions.Initialise, (state) => state),
    on(fromActions.SignInStart, (state) => state),
    on(fromActions.SignInSuccess, (state) => state),
    on(fromActions.SignInFailure, (state) => state),
    on(fromActions.SignUpStart, (state) => state),
    on(fromActions.SignUpSuccess, (state) => state),
    on(fromActions.SignUpFailure, (state) => state),
    on(fromActions.SignOutStart, (state) => state),
    on(fromActions.SignOutSuccess, (state) => state),
    on(fromActions.SignOutFailure, (state) => state),
    on(fromActions.UpsertUser, (state, user) => { return { ...state, user } }),
    on(fromActions.ResetUser, (state) => { return { ...state, user: null } }),
  )(state, action)
}
