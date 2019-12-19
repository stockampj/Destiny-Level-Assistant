import constants from './../constants';
const { initialState, types } = constants;

const selectedTierReducer = (state = initialState.selectedTier, action) => {
  let newSelectedTierState;
  switch (action.type) {
  case types.RESET_SELECTED_Tier:
    newSelectedTierState = 0;
    return newSelectedTierState;
  case types.CHANGE_SELECTED_Tier:
    newSelectedTierState = action.tierIndex;
    return newSelectedTierState;
  default:
    return state;
  }
};

export default selectedTierReducer;