import { Injectable } from '@angular/core'
import {
  Router,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  NavigationCancel,
  RoutesRecognized,
} from '@angular/router'

import { Observable } from 'rxjs'
import { filter, pairwise, map, tap } from 'rxjs/operators'

@Injectable()
export class RoutingStateService {
  private history = []

  constructor(private router: Router) {}

  public loadRouting(): void {
    this.router.events.pipe(
        filter(e => e instanceof RoutesRecognized),
        pairwise()
      ).subscribe((events: any[]) => {
        this.history = [...this.history, events[0].urlAfterRedirects]
    });
  }

  public getHistory(): string[] {
    return this.history
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 1] || '/'
  }

  public onStart(): Observable<NavigationStart> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      map((event) => <NavigationStart>event),
    )
  }

  public onError(): Observable<NavigationError> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationError),
      map((event) => <NavigationError>event),
    )
  }

  public onCancel(): Observable<NavigationCancel> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationCancel),
      map((event) => <NavigationCancel>event),
    )
  }

  public onEnd(): Observable<NavigationEnd> {
    return this.router.events.pipe(
      filter((event) => event instanceof RoutesRecognized),
      map((event) => <NavigationEnd>event),
    )
  }
}
