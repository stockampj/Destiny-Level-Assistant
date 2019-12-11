import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const changeState = (value1) => ({
  type: types.CHANGE_STATE,
  value1
});

let requestHeader = ({
  method: 'GET',
  headers: {
    'x-api-key': 'bd67d9ad9aca4084a9794f755888ae6c'
  }
});

export function fetchPlayerMembershipId(userName) {
  return function (dispatch) {
    dispatch(searchForPlayer(userName));
    const userNameSearch = userName.replace(' ', '');
    return fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${userNameSearch}/`, requestHeader).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json)
      if (json.Message === 'Ok'){
        const bNetId = json.Response.membershipId;
        userName = json.Response.displayName;
        console.log(bNetId);
      } else {
        console.log(json.Message);
        // ERROR CODE HANDLING NEEDED
      }
    });   
  };
}

export const searchForPlayer = (userName) => ({
  type: types.SEARCH_FOR_PLAYER,
  userName,
});






