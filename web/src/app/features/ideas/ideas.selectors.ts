import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIdeas from './ideas.reducer';

export const selectIdeasState = createFeatureSelector<fromIdeas.State>(
  fromIdeas.ideasFeatureKey
);
