import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as NewsActions from './news.actions';



@Injectable()
export class NewsEffects {

  loadNewss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NewsActions.loadNewss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => NewsActions.loadNewssSuccess({ data })),
          catchError(error => of(NewsActions.loadNewssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
