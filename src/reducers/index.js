import { combineReducers } from 'redux';
import reducer1 from './reducer1';

const rootReducer = combineReducers({
  stateSlice1: reducer1
});

export default rootReducer;