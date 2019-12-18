import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import manifestReducer from './manifestReducer';
import selectedCharacterReducer from './selectedCharacterReducer'

const rootReducer = combineReducers({
  player: playerReducer,
  manifest: manifestReducer,
  selectedCharacter: selectedCharacterReducer
});

export default rootReducer;


