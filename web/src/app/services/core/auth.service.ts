import { Injectable } from '@angular/core'

import { forkJoin ,  Observable ,  of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'

import { Config } from './config.service'
import { RemoteStore, LocalStore } from '../store'
import { TokenContract } from '../contracts/store/token.contract'
import { QueryActions } from '../contracts/store/query.contract'
import { RoutingStateService } from './routing-state.service';

@Injectable()
export class AuthService {
  _intendedUrl: string = '/'
  signInUrl: string = '/sign-in'
  dashboardUrl: string = '/' // use '/x' for dashboard

  set intendedUrl(url: string) {
    if (url.includes('sign-in') || url.includes('sign-out')) {
      this._intendedUrl = this.dashboardUrl
    } else {
      this._intendedUrl = url
    }
  }

  get intendedUrl() {
    return this.routingState.getPreviousUrl()
  }

  constructor(
    private remote: RemoteStore<TokenContract>,
    private local: LocalStore<TokenContract>,
    private config: Config,
    private routingState: RoutingStateService,
  ) {
    forkJoin(
      config.select<string>('urls.signIn'),
      config.select<string>('urls.dashboard'),
    ).subscribe(([signInUrl, dashboardUrl]) => {
      this.signInUrl = signInUrl
      this.dashboardUrl = dashboardUrl
    })
  }

  signIn(email: string, password: string): Observable<boolean> {
    return this.getToken(email, password).pipe(
      mergeMap((token) => {
        return this.local.create({
          token: token,
        })
      }),
      map((token) => {
        return !!token
      }),
    )
  }

  signOut(): Observable<boolean> {
    return forkJoin(
      this.local.update('token', null),
      this.local.update('hashId', null),
      this.local.update('cart', null),
    ).pipe(
      map(([token, hashId, cart]) => {
        return !null
      }),
    )
  }

  check(): Observable<boolean> {
    return this.remote.query([{ [QueryActions.first]: [] }], 'users/auth').pipe(
      map((response) => {
        return !!response
      }),
    )
  }

  user<U = any>(): Observable<U> {
    return this.remote
      .query<U>([{ [QueryActions.first]: [] }], 'users/auth')
      .pipe(
        catchError((e) => {
          // this.notif.snackbar('Authentication', 'Unable to sign in')
          return of(undefined)
        }),
      )
  }

  token(): string {
    let token = this.local.get('token')
    return (token && token.length > 0 && token[0]) ? `Bearer ${token[0].accessToken}` : ''
  }

  getToken(email: string, password: string): Observable<TokenContract> {
    return forkJoin(
      this.config.select<string>('store.remote.urls.base'),
      this.config.select<string>('store.remote.client.id'),
      this.config.select<string>('store.remote.client.secret'),
    ).pipe(
      mergeMap(([baseUrl, clientId, clientSecret]) => {
        return this.remote.aPost(`${baseUrl}/oauth/token`, {
          grant_type: 'password',
          client_id: clientId,
          client_secret: clientSecret,
          username: email,
          password: password,
          scope: '',
        })
      }),
    )
  }
}
