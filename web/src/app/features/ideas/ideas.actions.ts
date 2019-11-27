import { createAction, props } from '@ngrx/store';

export const loadIdeass = createAction(
  '[Ideas] Load Ideass'
);

export const loadIdeassSuccess = createAction(
  '[Ideas] Load Ideass Success',
  props<{ data: any }>()
);

export const loadIdeassFailure = createAction(
  '[Ideas] Load Ideass Failure',
  props<{ error: any }>()
);
