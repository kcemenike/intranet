import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGate from './gate.reducer';

export const selectGateState = createFeatureSelector<fromGate.State>(
  fromGate.gateFeatureKey
);
