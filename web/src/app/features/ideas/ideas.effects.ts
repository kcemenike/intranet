import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as IdeasActions from './ideas.actions';



@Injectable()
export class IdeasEffects {

  loadIdeass$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(IdeasActions.loadIdeass),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => IdeasActions.loadIdeassSuccess({ data })),
          catchError(error => of(IdeasActions.loadIdeassFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
