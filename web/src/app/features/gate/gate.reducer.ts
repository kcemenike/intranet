
import { GateActions, GateActionTypes } from './gate.actions';

export const gateFeatureKey = 'gate';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: GateActions): State {
  switch (action.type) {

    case GateActionTypes.LoadGates:
      return state;

    default:
      return state;
  }
}
