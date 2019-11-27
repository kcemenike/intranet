import { Action, createReducer, on } from '@ngrx/store';
import * as DocsActions from './docs.actions';

export const docsFeatureKey = 'docs';

export interface State {

}

export const initialState: State = {

};

const docsReducer = createReducer(
  initialState,

  on(DocsActions.loadDocss, state => state),
  on(DocsActions.loadDocssSuccess, (state, action) => state),
  on(DocsActions.loadDocssFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return docsReducer(state, action);
}
