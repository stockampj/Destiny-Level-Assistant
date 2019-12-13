import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMembershipId } from './../actions';
import PropTypes from 'prop-types';
import { fetchDestinyManifest } from '../actions/manifestDownload';

function PlayerSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchPlayerMembershipId(input.value.trim()));
        input.value = '';
      }}>
        <input placeholder="PSN XBOX or Steam UserName" ref={node => {input = node;}}></input>
        <button type='submit' >Search</button>
      </form>

      <button onClick={() => {dispatch(fetchDestinyManifest())}}>DL MANIFEST</button>
  
    
    </div>
  );
}

PlayerSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(PlayerSearch);