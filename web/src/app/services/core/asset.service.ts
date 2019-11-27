import { Injectable, Optional, Inject, InjectionToken } from '@angular/core'

import { Observable ,  of } from 'rxjs'

export const ASSET_LOCATION = new InjectionToken<string>('asset.location')

/**
 * handles assets requests
 *
 * ensure the requested assets is valid or returns a valid alternative
 * atleast try to save the situation
 * fails silently, if the matter cannot be helped
 */
@Injectable()
export class Asset {
  constructor(
    @Optional()
    @Inject(ASSET_LOCATION)
    private _location: string = 'assets',
  ) {}

  /**
   * alias for **path()**
   * @param fileType
   * @param name
   * @param defaultName
   */
  select(
    fileType: 'image' | 'video' | 'audio' | 'text' | string = 'image',
    name?: string,
    defaultName?: string,
  ): Observable<string> {
    return this.path(fileType, name, defaultName)
  }

  path(
    fileType: 'image' | 'video' | 'audio' | 'text' | string = 'image',
    name?: string,
    defaultName?: string,
  ): Observable<string> {
    let path = this._location + '/' + fileType + 's/'
    path += !this.check(path) && defaultName ? 'default/' + defaultName : name
    return of(path)
  }

  image(name: string, defaultName?: string): Observable<string> {
    return this.path('image', name, defaultName)
  }

  video(name: string, defaultName?: string): Observable<string> {
    return this.path('video', name, defaultName)
  }

  audio(name: string, defaultName?: string): Observable<string> {
    return this.path('audio', name, defaultName)
  }

  /**
   * check if the image url is valid
   * returns true if the url is valid
   *
   * use to decide weather to return a default alternative for an image request
   */
  check(path: string) {
    return true
  }

  location(newLocation: string) {
    this._location = newLocation
    return this
  }
}
