import { Injectable } from '@angular/core';
import { EntityServices, EntityCollectionService } from '@ngrx/data';
import { Entity } from 'src/app/entities/entity.contract';
import { titleCase } from 'src/app/services/core';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {
  entityName: string

  constructor(
    private services: EntityServices
  ) {}

  entity(name: string): EntityCollectionService<Entity>{
    this.entityName = name
    return this.services.getEntityCollectionService(titleCase(name));
  }

  service(): ExplorerService{
    const service = this.services.getEntityCollectionService(titleCase(this.entityName));
    // use service
    // ...
    return this
  }

}
