
import { createReducer, on } from '@ngrx/store';
import * as fromActions from './common.actions';
import { COMMON_CONFIG, CommonConfigContract } from './common.config';

export const commonFeatureKey = 'common';

export type State = CommonConfigContract

export const initialState: State = COMMON_CONFIG

export function reducer(state: State, action): State {
    return createReducer(initialState,
      on(fromActions.Initialise, (state) => state),
      on(fromActions.LoadArticle, (state, { kind }) => { return { ...state, kind } }),
      on(fromActions.LoadArticleSuccess, (state, { kind, content }) => { return { ...state, [kind]: content } }),
      on(fromActions.LoadArticleFail, (state, { kind, reason }) => { return { ...state, kind } }),
      on(fromActions.EditArticle, (state, { kind }) => { return { ...state, kind } }),
      on(fromActions.UpdateArticle, (state, { kind, content }) => { return { ...state, kind, [kind]: content } }),
      on(fromActions.UpdateArticleSuccess, (state, { kind }) => { return { ...state, kind } }),
      on(fromActions.UpdateArticleFail, (state, { kind, reason }) => { return { ...state, kind } }),
    )(state, action)
  }