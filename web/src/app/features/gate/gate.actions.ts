import { Action } from '@ngrx/store';

export enum GateActionTypes {
  LoadGates = '[Gate] Load Gates',
  
  
}

export class LoadGates implements Action {
  readonly type = GateActionTypes.LoadGates;
}


export type GateActions = LoadGates;
