import { Action, createReducer, on } from '@ngrx/store';
import * as EventsActions from './events.actions';

export const eventsFeatureKey = 'events';

export interface State {

}

export const initialState: State = {

};

const eventsReducer = createReducer(
  initialState,

  on(EventsActions.loadEventss, state => state),
  on(EventsActions.loadEventssSuccess, (state, action) => state),
  on(EventsActions.loadEventssFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return eventsReducer(state, action);
}
