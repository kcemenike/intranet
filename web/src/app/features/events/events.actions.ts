import { createAction, props } from '@ngrx/store';

export const loadEventss = createAction(
  '[Events] Load Eventss'
);

export const loadEventssSuccess = createAction(
  '[Events] Load Eventss Success',
  props<{ data: any }>()
);

export const loadEventssFailure = createAction(
  '[Events] Load Eventss Failure',
  props<{ error: any }>()
);
