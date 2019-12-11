import constants from './../constants';
const { initialState, types } = constants;

const playerReducer = (state = initialState.player, action) => {
  let newPlayerState;
  switch (action.type) {
  case types.SEARCH_FOR_PLAYER:
    newPlayerState = Object.assign({}, state, {
      userName: action.userName,
      isFetching: true
    });
    return newPlayerState;
  case types.UPDATE_PLAYER_CHARACTERS:
    newPlayerState = Object.assign({}, state, {
      userName: action.userName,
      membershipType: action.membershipType,
      bNetId: action.bNetId,
      characters: {
        1: {
          lightLevel: -1,
          charId: action.char1Id
        },
        2: {
          lightLevel: -1,
          charId: action.char2Id
        },
        3: {
          lightLevel: -1,
          charId: action.char3Id
        }
      }
    });
    return newPlayerState;
  default:
    return state;
  }
};

export default playerReducer;

export const updatePlayerCharacters = (bNetId, membershipType, userName, char1Id, char2Id, char3Id) => ({
  type: types.UPDATE_PLAYER_CHARACTERS,
  userName,
  membershipType,
  userName,
  char1Id,
  char2Id,
  char3Id
});