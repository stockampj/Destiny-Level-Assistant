import constants from './../constants';
const { initialState, types } = constants;

const manifestReducer = (state = initialState.manifest, action) => {
  let newManifestState;
  switch (action.type) {
  case types.START_MANIFEST_DOWNLOAD:
    newManifestState = Object.assign({}, state, {
      isFetching: true
    });
    return newManifestState;
  case types.UPDATE_STORE_MANIFEST:
    newManifestState = {
      manifest: action.destinyManifest
    };
    return newManifestState;
  default:
    return state;
  }
};

export default manifestReducer;