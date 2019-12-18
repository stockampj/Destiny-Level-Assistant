import constants from './../constants';
const { initialState, types } = constants;

const selectedCharacterReducer = (state = initialState.selectedCharacter, action) => {
  let newSelectedCharacterState;
  switch (action.type) {
  case types.RESET_SELECTED_PLAYER:
    newSelectedCharacterState = 0;
    return newSelectedCharacterState;
  case types.CHANGE_SELECTED_PLAYER:
    newSelectedCharacterState = action.characterIndex;
    return newSelectedCharacterState
  default:
    return state;
  }
};

export default selectedCharacterReducer;