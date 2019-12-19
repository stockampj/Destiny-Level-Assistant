const fs = require('fs');
const path = require('path');
import * as types from './../constants/ActionTypes';

let requestHeaderGET = ({
  headers: {
    'x-api-key': 'bd67d9ad9aca4084a9794f755888ae6c'
  }
});

export function fetchManifestVersion() {
  return function (dispatch) {
    dispatch(startManifestDownload());
    return fetch('https://www.bungie.net/Platform/Destiny2/Manifest/', requestHeaderGET).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if (json.Message === 'Ok'){
        const downloadPath = json.Response.jsonWorldContentPaths.en;
        const manifestVersion = json.Response.version;
        fetchDestinyManifest(downloadPath, manifestVersion, dispatch);
      } else {
        console.log(json.Message);
        // ERROR CODE HANDLING NEEDED
      }
    });   
  };
}

export const startManifestDownload = () => ({
  type: types.START_MANIFEST_DOWNLOAD
});

export function fetchDestinyManifest(downloadPath, manifestVersion, dispatch){
  const fetchManfestPath = `https://www.bungie.net${downloadPath}`;
  console.log(fetchManfestPath);
  return fetch(fetchManfestPath).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    console.log('json in tact');
    dispatch(updateStoreManifest(json));
  });   
}

export const updateStoreManifest = (json) => ({
  type: types.UPDATE_STORE_MANIFEST,
  destinyManifest: json
});