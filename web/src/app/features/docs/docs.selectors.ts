import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDocs from './docs.reducer';

export const selectDocsState = createFeatureSelector<fromDocs.State>(
  fromDocs.docsFeatureKey
);
