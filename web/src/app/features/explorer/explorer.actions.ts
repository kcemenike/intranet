import { createAction, props } from '@ngrx/store';
import { ExplorerLayoutType } from './explorer.config';

export const Initialise = createAction(
  '[Explorer] Initialise'
);

export const UpsertName = createAction(
  '[Explorer] UpsertName',
  props<{ name: string }>()
);

export const UpsertDesc = createAction(
  '[Explorer] UpsertDesc',
  props<{ desc: string }>()
);

export const UpsertLayoutType = createAction(
  '[Explorer] UpsertLayoutType',
  props<{ kind: ExplorerLayoutType }>()
);

export const UpsertSelected = createAction(
  '[Explorer] UpsertSelected',
  props<{ selected: string[] }>()
);

export const ResetSelected = createAction(
  '[Explorer] ResetSelected'
);
