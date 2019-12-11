import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const changeState = (value1) => ({
  type: types.CHANGE_STATE,
  value1
});

let requestHeader = {
  headers: {
    'x-api-key': 'bd67d9ad9aca4084a9794f755888ae6c'
  }
}

export function fetchPlayerMembershipId(userName) {
  return function (dispatch) {
    const localRequestId = v4();
    userName = userName.replace(' ', '_');
    return fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${userName}/`, requestHeader).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json)
    });   
  };
}



