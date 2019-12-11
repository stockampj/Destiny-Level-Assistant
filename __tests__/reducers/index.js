import constants from './../../src/constants';
import playerReducer from './../../src/reducers/playerReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Destiny Leveling Helper', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('playerReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(playerReducer(initialState.player, { type: null })).toEqual(initialState.player);
    });

   
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });
  });

});