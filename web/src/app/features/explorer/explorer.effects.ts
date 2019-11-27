import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromActions from './explorer.actions';

import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { ExplorerService } from './explorer.service';

@Injectable()
export class ExplorerEffects {

  Initialise$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Initialise),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertName$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertName),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertDesc$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertDesc),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertLayoutType$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertLayoutType),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpsertSelected$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertSelected),
    mergeMap((action) => {
      return from([])
    }),
  ));

  ResetSelected$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetSelected),
    mergeMap((action) => {
      return from([])
    }),
  ));

  constructor(
    private actions$: Actions,
    private explorerService: ExplorerService,
  ) {}

}
