import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CommonActionTypes, CommonActions } from './common.actions';



@Injectable()
export class CommonEffects {


  @Effect()
  loadCommons$ = this.actions$.pipe(
    ofType(CommonActionTypes.LoadCommons),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<CommonActions>) {}

}
