import { Injectable } from '@angular/core'

import { filter, tap } from 'rxjs/operators'
import { Observable ,  Subject } from 'rxjs'

export interface ActionEvent {
  title?: string
  type?: string
  $event?: any
  [key: string]: any
}

@Injectable()
export class ActionEmitter<T extends ActionEvent = ActionEvent> {
  actions: Subject<T> = new Subject<T>()

  constructor() {}

  emit(payload: T) {
    this.actions.next(payload)
  }

  typeOf(type: string): Observable<T> {
    return this.actions.pipe(
      filter((payload) => type === payload.type),
    )
  }
  
}
