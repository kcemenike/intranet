import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as fromActions from './user.actions'


@Injectable()
export class UserEffects {

  Initialise$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Initialise),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false })

  // SignInStart$ = createEffect(() => this.actions$.pipe(
  //   ofType(fromActions.SignInStart),
  //   mergeMap((user) => {
  //     return this.auth.signIn(user.email, user.password).pipe(
  //       map((status) => {
  //         return status ? fromActions.SignInSuccess() : fromActions.SignInFailure({ reason: 'Failed sign in attempt...try again' })
  //       }),
  //       catchError((e) => {
  //         return of(fromActions.SignInFailure({ reason: e && e.error && e.error.error }))
  //       }),
  //     )
  //   }),
  // ))

  constructor(private actions$: Actions) {}

}
