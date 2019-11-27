import * as AppActions from './app.actions';
import { createReducer, on } from '@ngrx/store';
import { AppConfigContract, APP_CONFIG } from './app.config';

export const appFeatureKey = 'app';

export type State = AppConfigContract;

export const initialState: State = APP_CONFIG;

export function reducer(state: State, action): State {
  return createReducer(initialState,
    on(AppActions.Initialise, (state) => state),

    on(AppActions.UpsertBrand, (state, app) => { return { ...state, app: { ...state.app, ...app } } }),
    on(AppActions.ResetBrand, (state) => { return { ...state, app: initialState.app } }),
    
    on(AppActions.UpsertPerson, (state, person) => { return { ...state, person: { ...state.person, person } } }),
    on(AppActions.ResetPerson, (state) => { return { ...state, person: initialState.person } }),
    
    on(AppActions.UpsertPage, (state, page) => { return { ...state, page: { ...state.page, ...page } } }),
    on(AppActions.ResetPage, (state) => { return { ...state, page: initialState.page } }),
    
    on(AppActions.UpsertEntities, (state, { entities }) => { return { ...state, entities: { ...state.entities, ...entities } } }),
    on(AppActions.ResetEntities, (state) => { return { ...state, entities: initialState.entities } }),
    
    on(AppActions.UpsertActions, (state, actions) => { return { ...state, actions: { ...state.actions, ...actions } } }),
    on(AppActions.ResetActions, (state) => { return { ...state, actions: initialState.actions } }),
    
    on(AppActions.UpsertMeta, (state, meta) => { return { ...state, meta: { ...state.meta, ...meta } } }),
    on(AppActions.ResetMeta, (state) => { return { ...state, meta: initialState.meta } }),
    
    on(AppActions.UpsertPreference, (state, preference) => { return { ...state, preference: { ...state.preference, ...preference } } }),
    on(AppActions.ResetPreference, (state) => { return { ...state, preference: initialState.preference } }),
    
    on(AppActions.UpsertSettings, (state, settings) => { return { ...state, settings: { ...state.settings, ...settings } } }),
    on(AppActions.ResetSettings, (state) => { return { ...state, settings: initialState.settings } }),
    
    on(AppActions.UIToggle, (state, { ui, status }) => { return { ...state, ui: { ...state.ui, [ui]: status } } }),

  )(state, action)
}