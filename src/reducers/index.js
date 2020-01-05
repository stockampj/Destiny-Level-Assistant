import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import manifestReducer from './manifestReducer';
import selectedCharacterReducer from './selectedCharacterReducer';
import selectedTierReducer from './selectedTierReducer';
import savePreviousStateReducer from './previousStateReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  manifest: manifestReducer,
  selectedCharacter: selectedCharacterReducer,
  selectedTier: selectedTierReducer,
  previousState: savePreviousStateReducer
});

export default rootReducer;


