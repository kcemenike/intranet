import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { Observable ,  of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public constructor (private t: Title) {}

  public set (title: string): void{
    this.t.setTitle(title)
  }

  public get (): string {
    return this.t.getTitle()
  }

  public get$ (): Observable<string> {
    return of(this.t.getTitle())
  }
}
