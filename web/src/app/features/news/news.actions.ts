import { createAction, props } from '@ngrx/store';

export const loadNewss = createAction(
  '[News] Load Newss'
);

export const loadNewssSuccess = createAction(
  '[News] Load Newss Success',
  props<{ data: any }>()
);

export const loadNewssFailure = createAction(
  '[News] Load Newss Failure',
  props<{ error: any }>()
);
