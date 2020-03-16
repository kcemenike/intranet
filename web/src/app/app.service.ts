import { Injectable } from '@angular/core';
import * as fromReducer from './app.reducer'
import * as fromActions from './app.actions'
import * as fromSelectors from './app.selectors'
import { Store, select } from '@ngrx/store';
import { BrandContract, PersonContract, PageContract, ActionsContract, AppMetaContract, JSONContract } from './services/contracts';
import { Observable, combineLatest } from 'rxjs';
import { HeaderContract } from './webgets/header/header.component';
import { map } from 'rxjs/operators';
import { Sidebar } from './webgets/sidebar/sidebar.component';
import { FooterContract } from './webgets/footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public store: Store<fromReducer.State>,
  ) { }
 
  initialise (): void{
    this.store.dispatch(fromActions.Initialise())
  }
 
  upsertBrand (brand: BrandContract): void{
    this.store.dispatch(fromActions.UpsertBrand(brand))
  }
 
  resetBrand (): void{
    this.store.dispatch(fromActions.ResetBrand())
  }
 
  upsertPerson (person: PersonContract): void{
    this.store.dispatch(fromActions.UpsertPerson(person))
  }
 
  resetPerson (): void{
    this.store.dispatch(fromActions.ResetBrand())
  }
 
  upsertPage (page: PageContract): void{
    this.store.dispatch(fromActions.UpsertPage(page))
  }
 
  resetPage (): void{
    this.store.dispatch(fromActions.ResetPage())
  }
 
  upsertEntities (entities: string[]): void{
    this.store.dispatch(fromActions.UpsertEntities({ entities }))
  }
 
  resetEntities (): void{
    this.store.dispatch(fromActions.ResetEntities())
  }
 
  upsertActions (type: string, actions: ActionsContract[]): void{
    this.store.dispatch(fromActions.UpsertActions({ [type]: actions }))
  }
 
  resetActions (): void{
    this.store.dispatch(fromActions.ResetActions())
  }
 
  upsertMeta (meta: AppMetaContract): void{
    this.store.dispatch(fromActions.UpsertMeta(meta))
  }
 
  resetMeta (): void{
    this.store.dispatch(fromActions.ResetMeta())
  }

  upsertPreference (preference: JSONContract): void{
    this.store.dispatch(fromActions.UpsertPreference(preference))
  }
 
  resetPreference (): void{
    this.store.dispatch(fromActions.ResetPreference())
  }

  upsertSettings (settings: JSONContract): void{
    this.store.dispatch(fromActions.UpsertSettings(settings))
  }
 
  resetSettings (): void{
    this.store.dispatch(fromActions.ResetSettings())
  }

  UIToggle (ui: string, status: boolean): void{
    this.store.dispatch(fromActions.UIToggle({ ui, status}))
  }
 
  state (): Observable<fromReducer.State>{
    return this.store.pipe(
      select(fromSelectors.state),
    )
  }
 
  brand (): Observable<BrandContract>{
    return this.store.pipe(
      select(fromSelectors.brand),
    )
  }
 
  person (): Observable<PersonContract>{
    return this.store.pipe(
      select(fromSelectors.person),
    )
  }
 
  page (): Observable<PageContract>{
    return this.store.pipe(
      select(fromSelectors.page),
    )
  }
 
  entities (): Observable<string[]>{
    return this.store.pipe(
      select(fromSelectors.entities),
    )
  }
 
  actions (type?: string): Observable<JSONContract | ActionsContract[]>{
    return this.store.pipe(
      select(fromSelectors.actions, { type }),
    )
  }
 
  meta (): Observable<AppMetaContract>{
    return this.store.pipe(
      select(fromSelectors.meta),
    )
  }
 
  preference (): Observable<JSONContract>{
    return this.store.pipe(
      select(fromSelectors.preference),
    )
  }
 
  settings (): Observable<JSONContract>{
    return this.store.pipe(
      select(fromSelectors.settings),
    )
  }

  ui (type?: string): Observable<JSONContract | boolean>{
    return this.store.pipe(
      select(fromSelectors.ui, { type }),
    )
  }

  header(): Observable<HeaderContract>{
    return combineLatest(
      this.store.select(fromSelectors.brand),
      this.store.select(fromSelectors.person),
      this.store.select(fromSelectors.actions(), { }),
      this.store.select(fromSelectors.ui(), { type: 'sidebar' }),
    ).pipe(
      map(([brand, person, actions, sidebarStatus]) => {
        return {
          brand,
          person,
          actions: {
            primary: actions['primary'],
            secondary: actions['secondary'],
            tertiary: actions['tertiary'],
            person: actions['person'],
          },
          sidebarStatus
        }
      })
    )
  }

  footer(): Observable<FooterContract>{
    return combineLatest(
      this.store.select(fromSelectors.actions(), { type: 'tertiary' }),
    ).pipe(
      map(([tertiary]) => {
        return {
          links: tertiary
        }
      })
    )
  }

  sidebar(): Observable<Sidebar>{
    return combineLatest(
      this.store.select(fromSelectors.person),
      this.store.select(fromSelectors.actions(), { }),
      this.store.select(fromSelectors.ui(), { type: 'sidebar' }),
    ).pipe(
      map(([person, actions, sidebarStatus]) => {
        return {
          person,
          actions: {
            primary: actions['primary'],
            secondary: actions['secondary'],
            tertiary: actions['tertiary'],
            person: actions['person'],
          },
          sidebarStatus,
        }
      })
    )
  }

}
