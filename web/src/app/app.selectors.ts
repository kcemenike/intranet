import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './app.reducer';
import { isNullOrUndefined } from './services/core';

export const state = createFeatureSelector<fromReducer.State>(
  fromReducer.appFeatureKey
);
export const brand = createSelector(state, state => state.brand)
export const person = createSelector(state, state => state.person)
export const page = createSelector(state, state => state.page)
export const entities = createSelector(state, state => state.entities)
export const actions = () => {
  return createSelector(state, (state, { type }) => {
    return (type && !isNullOrUndefined(state.actions[type])) ? state.actions[type] : state.actions
  })
}
export const meta = createSelector(state, state => state.meta)
export const preference = createSelector(state, state => state.preference)
export const settings = createSelector(state, state => state.settings)
export const ui = () => {
  return createSelector(state, (state, { type }) => {
    return (ui && !isNullOrUndefined(state.ui[type])) ? state.ui[type] : state.ui
  })
}
