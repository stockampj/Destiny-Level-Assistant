import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import manifestReducer from './manifestReducer';
import selectedCharacterReducer from './selectedCharacterReducer';
import selectedTierReducer from './selectedTierReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  manifest: manifestReducer,
  selectedCharacter: selectedCharacterReducer,
  selectedTier: selectedTierReducer
});

export default rootReducer;


