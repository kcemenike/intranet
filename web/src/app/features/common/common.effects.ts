import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromActions from './common.actions';
import { mergeMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { from, combineLatest, of, forkJoin } from 'rxjs';
import { CommonService } from './common.service';
import { isNullOrUndefined } from 'util';
import { RemoteStore } from 'src/app/services/store';
import { Config } from 'src/app/services/core';
import { ToastService } from 'src/app/webgets/toast/toast.service';
import { Router } from '@angular/router';



@Injectable()
export class CommonEffects {

  Initialise$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Initialise),
    mergeMap((action) => {
      return from([])
    }),
  ));

  LoadArticle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadArticle),
    mergeMap((action) => {
      console.log({action})
      return forkJoin([
        this.config.select<string>('store.remote.urls.base'),
      ]).pipe(
        withLatestFrom(this.commonService.article(action.kind)),
        mergeMap(([[baseUrl], content]) => {
          console.log({baseUrl, content})
          console.log(action.kind, `${baseUrl}/api/settings/${action.kind}/value`)
          return !isNullOrUndefined(content) ? of(content) : this.remote.aGet(`${baseUrl}/api/settings/${action.kind}/value`).pipe(
            map((detail) => {
              return {
                title: action.kind.toUpperCase(),
                detail: detail,
              }
            })
          )
        }),
        mergeMap((content) => {
          console.log({content})
          return of(fromActions.LoadArticleSuccess({ kind: action.kind, content }))
        }),
        catchError((e) => {
          console.log({e})
          return of(fromActions.LoadArticleFail({ kind: action.kind, reason: e && e.error && e.error.error }))
        })
      )
    })
  ));

  LoadArticleSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadArticleSuccess),
    tap((action) => {
    }),
  ), { dispatch: false });

  LoadArticleFail$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadArticleFail),
    tap((action) => {
      this.toast.show(`Unable to load the content for ${action.kind} page: ${action.reason}`, ToastService.FAILURE)
    }),
  ), { dispatch: false });

  EditArticle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.EditArticle),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpdateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpdateArticle),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpdateArticleSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpdateArticleSuccess),
    mergeMap((action) => {
      return from([])
    }),
  ));

  UpdateArticleFail$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UpdateArticleFail),
    mergeMap((action) => {
      return from([])
    }),
  ));

  constructor(
    private actions$: Actions,
    private commonService: CommonService,
    private remote: RemoteStore,
    private config: Config,
    private toast: ToastService,
    private router: Router,
  ) {}

}
