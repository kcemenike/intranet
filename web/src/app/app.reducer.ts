import * as fromActions from './app.actions';
import { createReducer, on } from '@ngrx/store';
import { AppConfigContract, APP_CONFIG } from './app.config';

export const appFeatureKey = 'app';

export type State = AppConfigContract;

export const initialState: State = APP_CONFIG;

export function reducer(state: State, action): State {
  return createReducer(initialState,
    on(fromActions.Initialise, (state) => state),

    on(fromActions.UpsertBrand, (state, app) => { return { ...state, app: { ...state.app, ...app } } }),
    on(fromActions.ResetBrand, (state) => { return { ...state, app: initialState.app } }),
    
    on(fromActions.UpsertPerson, (state, person) => { return { ...state, person: { ...state.person, person } } }),
    on(fromActions.ResetPerson, (state) => { return { ...state, person: initialState.person } }),
    
    on(fromActions.UpsertPage, (state, page) => { return { ...state, page: { ...state.page, ...page } } }),
    on(fromActions.ResetPage, (state) => { return { ...state, page: initialState.page } }),
    
    on(fromActions.UpsertEntities, (state, { entities }) => { return { ...state, entities: { ...state.entities, ...entities } } }),
    on(fromActions.ResetEntities, (state) => { return { ...state, entities: initialState.entities } }),
    
    on(fromActions.UpsertActions, (state, actionGroup) => { return { ...state, actions: { ...state.actions, ...actionGroup } } }),
    on(fromActions.ResetActions, (state) => { return { ...state, actions: initialState.actions } }),
    
    on(fromActions.UpsertMeta, (state, meta) => { return { ...state, meta: { ...state.meta, ...meta } } }),
    on(fromActions.ResetMeta, (state) => { return { ...state, meta: initialState.meta } }),
    
    on(fromActions.UpsertPreference, (state, preference) => { return { ...state, preference: { ...state.preference, ...preference } } }),
    on(fromActions.ResetPreference, (state) => { return { ...state, preference: initialState.preference } }),
    
    on(fromActions.UpsertSettings, (state, settings) => { return { ...state, settings: { ...state.settings, ...settings } } }),
    on(fromActions.ResetSettings, (state) => { return { ...state, settings: initialState.settings } }),
    
    on(fromActions.UIToggle, (state, { ui, status }) => { return { ...state, ui: { ...state.ui, [ui]: status } } }),

  )(state, action)
}