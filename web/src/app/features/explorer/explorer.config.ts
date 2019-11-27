import { Routes } from '@angular/router';
import { ExplorerComponent } from './explorer.component';
import { FormComponent } from './form/form.component';
import { SoloComponent } from './solo/solo.component';
import { CollectionComponent } from './collection/collection.component';
import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { BASE_URL } from 'src/app/app.config';
import { ActionsContract } from 'src/app/services/contracts';

export const EXPLORER_ROUTES: Routes = [
  {
    path: '',
    component: ExplorerComponent,
    children: [
      {
        path: 'create',
        data: { action: 'create'},
        component: FormComponent
      },
      {
        path: ':id/edit',
        data: { action: 'edit'},
        component: FormComponent
      },
      {
        path: ':id',
        component: SoloComponent
      },
      {
        path: '',
        component: CollectionComponent
      }
    ]
  }
]

export const entityMetadata: EntityMetadataMap = {
  User: {},
  Role: {},
};

export const pluralNames = { 
  User: 'Users',
  Role: 'Roles',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: `${BASE_URL}/api`,
  timeout: 3000,
}

export type ExplorerLayoutType = string | 'table' | 'list' | 'card'

export interface ExplorerConfigContract {
  name: string;
  desc: string;
  layoutType: ExplorerLayoutType;
  selected: string[];
  [key: string]: any,
}

export const EXPLORER_CONFIG: ExplorerConfigContract = {
  name: null,
  desc: null,
  layoutType: 'table',
  selected: [],
}
