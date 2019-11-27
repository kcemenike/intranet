import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommon from './common.reducer';

// export const getCount = createSelector(
//   getCounterValue,
//   (counter, props) => counter * props.multiply
// );

export const selectCommonState = createFeatureSelector<fromCommon.State>(
  fromCommon.commonFeatureKey
);
