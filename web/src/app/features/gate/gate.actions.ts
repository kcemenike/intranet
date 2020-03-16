import { createAction, props } from '@ngrx/store';
import { UserContract } from 'src/app/services/contracts';

export const Initialise = createAction(
  '[Gate] Initialise'
);

export const SignInStart = createAction(
  '[Gate] SignInStart',
  props<UserContract>()
);

export const SignInSuccess = createAction(
  '[Gate] SignInSuccess'
);

export const SignInFailure = createAction(
  '[Gate] SignInFailure',
  props<{ reason: string }>()
);

export const SignUpStart = createAction(
  '[Gate] SignInStart',
  props<UserContract>()
);

export const SignUpSuccess = createAction(
  '[Gate] SignInSuccess'
);

export const SignUpFailure = createAction(
  '[Gate] SignInFailure',
  props<{ reason: string }>()
);

export const SignOutStart = createAction(
  '[Gate] SignOutStart'
);

export const SignOutSuccess = createAction(
  '[Gate] SignOutSuccess'
);

export const SignOutFailure = createAction(
  '[Gate] SignOutFailure',
  props<{ reason: string }>()
);

export const UpsertUser = createAction(
  '[Gate] UpsertUser',
  props<UserContract>()
);

export const ResetUser = createAction(
  '[Gate] isa2@g.com'
);