import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ForumsActions from './forums.actions';



@Injectable()
export class ForumsEffects {

  loadForumss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ForumsActions.loadForumss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ForumsActions.loadForumssSuccess({ data })),
          catchError(error => of(ForumsActions.loadForumssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
