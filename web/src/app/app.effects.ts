import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromActions from './app.actions';
import { AppService } from './app.service';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';



@Injectable()
export class AppEffects {

  Initialise$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Initialise),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertBrand$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertBrand),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetBrand$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetBrand),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertPerson$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertPerson),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetPerson$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetPerson),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertPage$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertPage),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetPage$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetPage),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertEntities$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertEntities),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetEntities$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetEntities),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertActions$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertActions),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetActions$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetActions),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertMeta$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertMeta),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetMeta$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetMeta),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertPreference$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertPreference),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetPreference$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetPreference),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertSettings$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertSettings),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetSettings$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetSettings),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UIToggle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UIToggle),
    mergeMap((action) => {
      return from([])
    }),
  ));

  constructor(
    private actions$: Actions,
    private appService: AppService,
  ) {}

}
