import constants from './../constants';
const { initialState, types } = constants;

const playerReducer = (state = initialState.player, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default playerReducer;

