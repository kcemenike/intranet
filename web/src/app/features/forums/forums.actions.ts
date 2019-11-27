import { createAction, props } from '@ngrx/store';

export const loadForumss = createAction(
  '[Forums] Load Forumss'
);

export const loadForumssSuccess = createAction(
  '[Forums] Load Forumss Success',
  props<{ data: any }>()
);

export const loadForumssFailure = createAction(
  '[Forums] Load Forumss Failure',
  props<{ error: any }>()
);
