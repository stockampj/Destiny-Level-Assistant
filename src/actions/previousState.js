import * as types from './../constants/ActionTypes';

export const savePreviousState = (selectedTier) => ({
  type: types.SAVE_PREVIOUS_STATE,
  selectedTier
});
