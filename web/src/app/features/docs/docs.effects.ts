import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DocsActions from './docs.actions';



@Injectable()
export class DocsEffects {

  loadDocss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(DocsActions.loadDocss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DocsActions.loadDocssSuccess({ data })),
          catchError(error => of(DocsActions.loadDocssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
