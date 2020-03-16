import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { BASE_URL, ENTITIES } from 'src/app/app.config';
import { titleCase } from 'src/app/services/core';

export const entityMetadata: EntityMetadataMap = ENTITIES.reduce((prev, curr) => {
  return {
    ...prev,
    [titleCase(curr)]: {
      entityName: curr.toLowerCase() 
    }
  }
}, {})

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
  name: 'user',
  desc: '...',
  layoutType: 'table',
  selected: [],
}
