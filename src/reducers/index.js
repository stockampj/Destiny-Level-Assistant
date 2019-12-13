import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import manifestReducer from './manifestReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  manifest: manifestReducer
});

export default rootReducer;


