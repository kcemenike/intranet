import * as ExplorerActions from './explorer.actions';
import { createReducer, on } from '@ngrx/store';
import { ExplorerConfigContract, EXPLORER_CONFIG } from './explorer.config';

export const explorerFeatureKey = 'explorer';

export type State = ExplorerConfigContract;

export const initialState: State = EXPLORER_CONFIG;

export function reducer(state: State, action): State {
  return createReducer(initialState,
    on(ExplorerActions.Initialise, (state) => state),
    on(ExplorerActions.UpsertName, (state, { name }) => { return { ...state, name } }),
    on(ExplorerActions.UpsertDesc, (state, { desc }) => { return { ...state, desc } }),
    on(ExplorerActions.UpsertLayoutType, (state, { kind }) => { return { ...state, kind } }),
    on(ExplorerActions.UpsertSelected, (state, { selected }) => { return { ...state, selected: [ ...state.selected, ...selected ] } }),
    on(ExplorerActions.ResetSelected, (state) => { return { ...state, selected: [] } }),
  )(state, action)
}