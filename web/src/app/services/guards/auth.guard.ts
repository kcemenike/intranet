import { Injectable } from '@angular/core'
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'

import { Observable ,  of } from 'rxjs'
import { map ,  tap ,  catchError } from 'rxjs/operators'

import { AuthService } from '../core/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(protected router: Router, protected auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.auth.check().pipe(
      tap((status) => {
        if (!status) {
          this.router.navigate([this.auth.signInUrl])
        }
      }),
      catchError((e) => {
        return of(false)
      }),
    )
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.canActivate(route, state)
  }
}
