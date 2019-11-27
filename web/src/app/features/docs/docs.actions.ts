import { createAction, props } from '@ngrx/store';

export const loadDocss = createAction(
  '[Docs] Load Docss'
);

export const loadDocssSuccess = createAction(
  '[Docs] Load Docss Success',
  props<{ data: any }>()
);

export const loadDocssFailure = createAction(
  '[Docs] Load Docss Failure',
  props<{ error: any }>()
);
