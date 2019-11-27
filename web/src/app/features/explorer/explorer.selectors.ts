import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExplorer from './explorer.reducer';

export const state = createFeatureSelector<fromExplorer.State>(
  fromExplorer.explorerFeatureKey
);

export const name = createSelector(state, state => state.name)
export const desc = createSelector(state, state => state.desc)
export const layoutType = createSelector(state, state => state.layoutType)
export const selected = createSelector(state, state => state.selected)
