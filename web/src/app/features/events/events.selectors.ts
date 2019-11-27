import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEvents from './events.reducer';

export const selectEventsState = createFeatureSelector<fromEvents.State>(
  fromEvents.eventsFeatureKey
);
