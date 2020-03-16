import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'

import { map } from 'rxjs/operators'
import { Observable ,  forkJoin } from 'rxjs'

import { AuthService } from '../core/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.auth.token()),
    })

    // send cloned request with header to the next handler.
    return next.handle(authReq)
  }
}
