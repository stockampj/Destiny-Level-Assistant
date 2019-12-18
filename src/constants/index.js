import * as types from './ActionTypes';
import { initialState } from './InitialState';
import { bucketToType, classDefinitions } from './buckets';


export default {
  initialState: initialState,
  types: types,
  bucketToType: bucketToType,
  classDefinitions: classDefinitions
};
