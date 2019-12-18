import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMembershipId } from './../actions';
import PropTypes from 'prop-types';
import { fetchManifestVersion } from '../actions/manifestDownload';

function PlayerSearch({ dispatch, userName }) {
  let input;
  return (
    <div>
      <style>{`
        .search-holder {
            position: relative;
            height: 100px;
            width: 300px;
            overflow: hidden;
            margin: 5px;
            border: solid 1px rgba(255,255,255,.5);
            background-color: rgba(0, 0, 0, .3);
            box-shadow: 4px 5px 5px -3px #000000;
          }
          .playerSearch {
            position: absolute;
            left: 5px;
            top: 5px;
            height: 30px;
            width: 200px;
            background-color: rgba(255,255,255,.8);
            border: solid thin inset rgba(10,10,10,.3);
            color: gray;
            text-align: center;
          }
          .playerSearch-button{
            position: absolute;
            right: 25px;
            top: 7px;
            height: 34px;
            width: 60px;
            background-color: rgba(230,230,230,1)
          }
          .manifest-button{
            position: absolute;
            right: 5px;
            top: 5px;
            height: 34px;
            width: 10px;
            border: thin;
            background-color: rgba(100,100,100,1)
          }
          .name-holder {
            position: absolute;
            bottom: 5px;
            left: 5px;
            height: 50px;
            width: 290px;
            display: flex;
            overflow: hidden;
          }
          .userName {
            display: block;
            margin: 0;
            align-content: center;
            justify-content: center;
            font-size: 40px;
            font-weight: 100;
            font-family: 'EB Garamond', serif;
          }
      `}</style>
      <div>
        <div className='search-holder'>
              <form onSubmit={(event) => {
                  event.preventDefault();
                  if (!input.value.trim()) {
                    return;
                  }
                  dispatch(fetchPlayerMembershipId(input.value.trim()));
                  input.value = '';
                }}>
                <input className='playerSearch' placeholder="PSN XBOX or Steam UserName" ref={node => { input = node; }}></input>
                <button className='playerSearch-button btn' type='submit' >Search</button>
              </form>
              <div className='name-holder'>
                <h4 className='userName'>{userName}</h4>
              </div>
              
          <button className='manifest-button btn' onClick={() => { dispatch(fetchManifestVersion()); }}></button>
        </div>
      </div>
    </div>
  );
}

PlayerSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(PlayerSearch);