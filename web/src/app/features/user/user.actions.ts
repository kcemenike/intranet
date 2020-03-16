import { Action, createAction } from '@ngrx/store';

export const Initialise = createAction(
  '[Gate] Initialise'
);

// export const SignInStart = createAction(
//   '[Gate] SignInStart',
//   props<UserContract>()
// );