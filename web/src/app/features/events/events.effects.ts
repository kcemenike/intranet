import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as EventsActions from './events.actions';



@Injectable()
export class EventsEffects {

  loadEventss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(EventsActions.loadEventss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EventsActions.loadEventssSuccess({ data })),
          catchError(error => of(EventsActions.loadEventssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
