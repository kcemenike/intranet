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
  ), { dispatch: false });

  UpsertName$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertName),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false });

  UpsertDesc$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertDesc),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false });

  UpsertLayoutType$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertLayoutType),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false });

  UpsertSelected$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpsertSelected),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false });

  ResetSelected$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.ResetSelected),
    mergeMap((action) => {
      return from([])
    }),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private explorerService: ExplorerService,
  ) {}

}
