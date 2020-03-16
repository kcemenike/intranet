import { Injectable } from '@angular/core'

import { forkJoin, Observable, of } from 'rxjs'
import { mergeMap, map, catchError } from 'rxjs/operators'

import { Config } from './config.service'
import { RemoteStore, LocalStore } from '../store'
import { TokenContract } from '../contracts/store/token.contract'
import { QueryActions } from '../contracts/store/query.contract'
import { RoutingStateService } from './routing-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _intendedUrl: string = '/'
  signInUrl: string = '/gate/sign-in'
  dashboardUrl: string = '/user/dashbord'

  set intendedUrl(url: string) {
    if (url.includes('sign-in') || url.includes('sign-out')) {
      this._intendedUrl = this.config.pick<string>('auth.dashboard')
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
      config.select<string>('auth.signInUrl'),
      config.select<string>('auth.dashboardUrl'),
    ).subscribe(([signInUrl, dashboardUrl]) => {
      this.signInUrl = signInUrl
      this.dashboardUrl = dashboardUrl
    })
  }
 
  prevUrl() {
    return this.routingState.getPreviousUrl()
  }

  signIn(email: string, password: string): Observable<boolean> {
    return this.getToken(email, password).pipe(
      mergeMap((token) => {
        return this.local.create({
          token: token,
        })
      }),
      map((token) => {
        return !!token.accessToken
      }),
    )
  }

  signOut(): Observable<boolean> {
    return forkJoin(
      this.config.select<string>('store.remote.urls.base'),
    ).pipe(
      mergeMap(([baseUrl]) => {
        return this.remote.aPost(`${baseUrl}/api/auth/logout`, { })
      }),
      mergeMap((status) => {
        return forkJoin(
          this.local.update('token', null),
        )
      }),
      map(([token]) => {
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
    return forkJoin(
      this.config.select<string>('store.remote.urls.base'),
    ).pipe(
      mergeMap(([baseUrl]) => {
        return this.remote.aGet(`${baseUrl}/api/auth/user`)
      })
    )
  }

  token(): string {
    let token = this.local.get('token')
    return (token && token.length > 0 && token[0]) ? `Bearer ${token[0].accessToken}` : ''
  }

  getToken(email: string, password: string): Observable<TokenContract> {
    return forkJoin(
      this.config.select<string>('store.remote.urls.base'),
    ).pipe(
      mergeMap(([baseUrl]) => {
        return this.remote.aPost(`${baseUrl}/api/auth/login`, { email, password })
      }),
    )
  }

}
