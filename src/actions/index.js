import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const changeState = (value1) => ({
  type: types.CHANGE_STATE,
  value1
});