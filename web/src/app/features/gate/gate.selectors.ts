import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './gate.reducer';

export const state = createFeatureSelector<fromReducer.State>(
  fromReducer.gateFeatureKey
);

export const user = createSelector(state, state => state.user)
 