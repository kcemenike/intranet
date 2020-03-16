import { Injectable } from '@angular/core';
import { EntityServices, EntityCollectionService } from '@ngrx/data';
import { Entity } from 'src/app/entities/entity.contract';
import { titleCase } from 'src/app/services/core';
import { Store, select } from '@ngrx/store';
import * as fromActions from './explorer.actions';
import * as fromReducer from './explorer.reducer';
import * as fromSelectors from './explorer.selectors';
import { ExplorerLayoutType } from './explorer.config';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  constructor(
    public store: Store<fromReducer.State>,
    private services: EntityServices,
  ) { }
 
  initialise (): void{
    this.store.dispatch(fromActions.Initialise())
  }
 
  upsertName (name: string): void{
    this.store.dispatch(fromActions.UpsertName({ name }))
  }
 
  upsertDesc (desc: string): void{
    this.store.dispatch(fromActions.UpsertDesc({ desc }))
  }
 
  upsertLayoutType (kind: ExplorerLayoutType): void{
    this.store.dispatch(fromActions.UpsertLayoutType({ kind }))
  }
 
  upsertSelected (selected: string[]): void{
    this.store.dispatch(fromActions.UpsertSelected({ selected }))
  }
 
  resetSelected (): void{
    this.store.dispatch(fromActions.ResetSelected())
  }

  entity(): Observable<EntityCollectionService<Entity>>{
    return this.name().pipe(
      map((name) => {
        console.log({name}, titleCase(name))
        return this.services.getEntityCollectionService(titleCase(name));
      })
    )
  }

  // service(): ExplorerService{
  //   const service = this.services.getEntityCollectionService(titleCase(this.entityName));
  //   // use service
  //   // ...
  //   return this
  // }

  state (): Observable<fromReducer.State>{
    return this.store.pipe(
      select(fromSelectors.state),
    )
  }

  name (): Observable<string>{
    return this.store.pipe(
      select(fromSelectors.name),
    )
  }

  desc (): Observable<string>{
    return this.store.pipe(
      select(fromSelectors.desc),
    )
  }

  layoutType (): Observable<ExplorerLayoutType>{
    return this.store.pipe(
      select(fromSelectors.layoutType),
    )
  }

  selected (): Observable<string[]>{
    return this.store.pipe(
      select(fromSelectors.selected),
    )
  }

}
