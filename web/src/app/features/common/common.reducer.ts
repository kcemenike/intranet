
import { CommonActions, CommonActionTypes } from './common.actions';
import { createReducer } from '@ngrx/store';

export const commonFeatureKey = 'common';

export interface State {

}

export const initialState: State = {

};

// const scoreboardReducer = createReducer(
//   initialState,
//   on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
//   on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
//   on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
//   on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return scoreboardReducer(state, action);
// }
// export function reducer(state = initialState, action: CommonActions): State {
//   switch (action.type) {

//     case CommonActionTypes.LoadCommons:
//       return state;

//     default:
//       return state;
//   }
// }
