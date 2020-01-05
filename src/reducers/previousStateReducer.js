import constants from './../constants';
const { initialState, types } = constants;

const savePreviousStateReducer = (state = initialState.previousState, action) => {
  let newPreviousState;
  switch (action.type) {
  case types.SAVE_PREVIOUS_STATE:
    newPreviousState = {
      selectedTier: action.selectedTier,
    }
    return newPreviousState;
  default:
    return state;
  }
};

export default savePreviousStateReducer;