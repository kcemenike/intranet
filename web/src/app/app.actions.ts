import { createAction, props } from '@ngrx/store';
import { BrandContract, PersonContract, PageContract, ActionsContract, AppMetaContract, JSONContract } from './services/contracts';

export const Initialise = createAction(
  '[App] Initialise'
);

export const UpsertBrand = createAction(
  '[App] UpsertBrand',
  props<BrandContract>()
);

export const ResetBrand = createAction(
  '[App] ResetBrand',
);

export const UpsertPerson = createAction(
  '[App] UpsertPerson',
  props<PersonContract>()
);

export const ResetPerson = createAction(
  '[App] ResetPerson',
);

export const UpsertPage = createAction(
  '[App] UpsertPage',
  props<PageContract>()
);

export const ResetPage = createAction(
  '[App] ResetPage',
);

export const UpsertEntities = createAction(
  '[App] UpsertEntities',
  props<{ entities: string[] }>()
);

export const ResetEntities = createAction(
  '[App] ResetEntities',
);

export const UpsertActions = createAction(
  '[App] UpsertActions',
  props<{ [type: string]: ActionsContract[] }>()
);

export const ResetActions = createAction(
  '[App] ResetActions',
);

export const UpsertMeta = createAction(
  '[App] UpsertMeta',
  props<AppMetaContract>()
);

export const ResetMeta = createAction(
  '[App] ResetMeta',
);

export const UpsertPreference = createAction(
  '[App] UpsertPreference',
  props<JSONContract>()
);

export const ResetPreference = createAction(
  '[App] ResetPreference',
);

export const UpsertSettings = createAction(
  '[App] UpsertSettings',
  props<JSONContract>()
);

export const ResetSettings = createAction(
  '[App] ResetSettings',
);

export const UIToggle = createAction(
  '[App] UIToggle',
  props<{ ui: string, status: boolean }>()
);