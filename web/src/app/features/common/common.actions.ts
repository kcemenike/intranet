import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ username: string; password: string }>()
// );

export const ViewAbout = createAction('[Common][About] View');
export const EditAbout = createAction('[Common][About] Edit');
export const UpdateAbout = createAction('[Common][About] Update');


export const ViewContact = createAction('[Common][Contact] View');
export const EditContact = createAction('[Common][Contact] Edit');
export const UpdateContact = createAction('[Common][Contact] Update');


export enum CommonActionTypes {
  LoadCommons = '[Common] Load Commons',
  
  
}

export class LoadCommons implements Action {
  readonly type = CommonActionTypes.LoadCommons;
}


export type CommonActions = LoadCommons;
