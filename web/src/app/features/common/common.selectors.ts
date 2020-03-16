import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './common.reducer';
import { isNullOrUndefined } from 'util';


export const state = createFeatureSelector<fromReducer.State>(
  fromReducer.commonFeatureKey
);

export const article = () => {
  return createSelector(state, (state, { kind }) => {
    return (kind && !isNullOrUndefined(state[kind])) ? state[kind] : null
  })
}
export const kind = createSelector(state, state => state.kind)