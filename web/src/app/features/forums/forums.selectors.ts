import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromForums from './forums.reducer';

export const selectForumsState = createFeatureSelector<fromForums.State>(
  fromForums.forumsFeatureKey
);
