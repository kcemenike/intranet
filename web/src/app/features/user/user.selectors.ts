import { createFeatureSelector } from '@ngrx/store';
import * as fromReducer from './user.reducer';

export const state = createFeatureSelector<fromReducer.State>(
  fromReducer.userFeatureKey
);

// export const user = createSelector(state, state => state.user)
 