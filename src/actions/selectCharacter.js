import * as types from './../constants/ActionTypes';

export const resetSelectedPlayer = () => ({
  type: types.RESET_SELECTED_PLAYER,
});

export const changeSelectedPlayer = (characterIndex) => ({
  type: types.CHANGE_SELECTED_PLAYER,
  characterIndex
});