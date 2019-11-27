import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  randomString,
  time,
  RoutingStateService,
  Config,
} from '../../../services/core'
import { RemoteStore, LocalStore } from '../../../services/store'
import {
  Router,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  NavigationCancel,
  Event,
} from '@angular/router'
import {
  tap,
  map,
  filter,
  combineLatest as combineLatestOp,
  mergeMap,
} from 'rxjs/operators'
import { Subject ,  Observable ,  from ,  forkJoin ,  combineLatest ,  Subscription } from 'rxjs'

/**
 * Tracks page activity and store locally,
 * transmit to server on subsequent visit
 */
@Injectable()
export class SpyService {
  sessionObs: Subscription
  pageObs: Subscription
  eventObs: Subscription
  hashIdObs: Subscription

  private events: Subject<any> = new Subject<any>()

  private session$: Subject<any> = new Subject<any>()
  private page$: Subject<any> = new Subject<any>()
  private event$: Subject<any> = new Subject<any>()

  private hashId
  private sessionId = 0
  private pageId

  private pagesQueue: any[] = []
  private eventsQueue: any[] = []

  constructor(
    private remote: RemoteStore,
    private local: LocalStore,
    private config: Config,
    private routeEvents: RoutingStateService,
    private router: Router,
  ) {
    this.setHashId()
  }

  start(){
    this.sessionObs = this.session().subscribe((session) => {})
    this.pageObs = this.page().subscribe((page) => {})
    this.eventObs = this.event().subscribe((event) => {})
  }

  onSession() {
    this.emitToSession({
      hashId: this.hashId,
      detail: {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        product: navigator.product,
        userAgent: navigator.userAgent,
        navigator: navigator,
      },
    })
  }

  onPage() {
    let pageStart = {} 
    this.router.events.forEach((event: Event) => {
      if (event instanceof NavigationStart) {
        pageStart = {
          url: event.url,
          startAt: time()
        }
      }
      if (event instanceof NavigationCancel) {
      }
      if (event instanceof NavigationError) {
      }
      if (event instanceof NavigationEnd && pageStart && pageStart['url']) {
        this.emitToPage({
          ...pageStart,
          endAt: time()
        })
      }
    })
  }

  onEvent(event: any) {
    this.emitToEvent(event)
  }

  emitToSession(session: any) {
    this.session$.next(session)
  }

  emitToPage(page: any) {
    this.page$.next(page)
  }

  emitToEvent(event: any) {
    this.event$.next(event)
  }

  session(): Observable<any> {
    return combineLatest(
      this.config.select<string>('store.remote.urls.APIbase'),
      this.config.select<string>('spy.urls.session'),
      this.session$,
    ).pipe(
      mergeMap(([APIbase, sessionUrl, session]) => {
        return this.remote.aPost(`${APIbase}/${sessionUrl}`, session)
      }),
    )
  }

  page(): Observable<any> {
    return combineLatest(
      this.config.select<string>('store.remote.urls.APIbase'),
      this.config.select<string>('spy.urls.page'),
      this.page$,
      this.session(),
    ).pipe(
      mergeMap(([APIbase, pageUrl, page, session]) => {
        return this.remote.aPost(`${APIbase}/${pageUrl}`, {
          ...page,
          sessionId: session.id,
        })
      }),
    )
  }

  event(): Observable<any> {
    return combineLatest(
      this.config.select<string>('store.remote.urls.APIbase'),
      this.config.select<string>('spy.urls.event'),
      this.event$,
      this.page(),
    ).pipe(
      mergeMap(([APIbase, eventUrl, event, page]) => {
        return this.remote.aPost(`${APIbase}/${eventUrl}`, {
          ...event,
          pageId: page.id,
        })
      }),
    )
  }

  setHashId() {
    this.hashId = this.local.get('hashId')
    if (!this.hashId) {
      this.hashIdObs = this.local
        .create({
          hashId: randomString(12),
        })
        .subscribe((hashId) => {
          this.hashId = hashId
        })
    }
  }

  close() {
    this.sessionObs.unsubscribe()
    this.pageObs.unsubscribe()
    this.eventObs.unsubscribe()
    this.hashIdObs.unsubscribe()
  }
}
