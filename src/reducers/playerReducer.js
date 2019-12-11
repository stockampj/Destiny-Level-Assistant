import constants from './../constants';
const { initialState, types } = constants;

const playerReducer = (state = initialState.player, action) => {
  switch (action.type) {
  case types.SEARCH_FOR_PLAYER:
    const newPlayerState = Object.assign({}, state, {
      userName: action.userName,
      isFetching: true
    });
    return newPlayerState;

  default:
    return state;
  }
};

export default playerReducer;

