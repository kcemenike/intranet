import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, tap, catchError, map } from 'rxjs/operators';
import { from, of, forkJoin } from 'rxjs';
import * as fromActions from './gate.actions';
import { AuthService, Config } from 'src/app/services/core';
import { ToastService } from 'src/app/webgets/toast/toast.service';
import { Router } from '@angular/router';
import { RemoteStore } from 'src/app/services/store';
import { AppService } from 'src/app/app.service';
import { personActions } from 'src/app/app.config';

@Injectable()
export class GateEffects {

  Initialise$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Initialise),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false })

  SignInStart$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignInStart),
    mergeMap((user) => {
      return this.auth.signIn(user.email, user.password).pipe(
        map((status) => {
          return status ? fromActions.SignInSuccess() : fromActions.SignInFailure({ reason: 'Failed sign in attempt...try again' })
        }),
        catchError((e) => {
          return of(fromActions.SignInFailure({ reason: e && e.error && e.error.error }))
        }),
      )
    }),
  ))

  SignInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignInSuccess),
    mergeMap((action) => {
      this.toast.show('Loading your dashboard', ToastService.SUCCESS)
      return this.auth.user().pipe(
        catchError((e) => {
          this.router.navigate([this.auth.signInUrl])
          this.toast.show('Unable to load dashboard. Please try again', ToastService.FAILURE)
          return of({})
        }),
      )
    }),
    mergeMap((user) => {
      this.router.navigate([this.auth.dashboardUrl])
      this.appService.upsertPerson({
        name: user.email,
      })
      this.appService.upsertActions('person', personActions(user))
      return of(fromActions.UpsertUser(user))
    })
  ))

  SignInFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignInFailure),
    map((action) => {
      this.toast.show(action.reason, ToastService.FAILURE)
    }),
  ), { dispatch: false })

  SignUpStart$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignUpStart),
    mergeMap((action) => {
      return from([])
    }),
  ))

  SignUpSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignUpSuccess),
    mergeMap((action) => {
      return from([])
    }),
  ))

  SignUpFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignUpFailure),
    mergeMap((action) => {
      return from([])
    }),
  ))

  SignOutStart$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignOutStart),
    mergeMap((user) => {
      return this.auth.signOut().pipe(
        map((status) => {
          return status ? fromActions.SignOutSuccess() : fromActions.SignOutFailure({ reason: 'Failed sign out...try again' })
        }),
        catchError((e) => {
          return of(fromActions.SignInFailure({ reason: e && e.error && e.error.error }))
        }),
      )
    }),
  ))

  SignOutSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignOutSuccess),
    map((action) => {
      console.log(this.auth.signInUrl, 'url')
      this.router.navigate([this.auth.signInUrl])
      this.toast.show('Sign out successfull', ToastService.SUCCESS)
    }),
  ), { dispatch: false })

  SignOutFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SignOutFailure),
    map((action) => {
      this.router.navigate([this.auth.prevUrl()])
      this.toast.show(action.reason, ToastService.FAILURE)
      console.log(this.auth.prevUrl())
    }),
  ), { dispatch: false })

  UpsertUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertUser),
    mergeMap((action) => {
      return from([])
    }),
  ))

  ResetUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetUser),
    mergeMap((action) => {
      return from([])
    }),
  ))

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private toast: ToastService,
    private router: Router,
    private remote: RemoteStore<any>,
    private config: Config,
    private appService: AppService,
  ) {}

}
