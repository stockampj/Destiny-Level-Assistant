import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { restartSong, changeSong } from './../actions';


function PlayerCharacters({ dispatch, player}){
  let { userName, bNetId, platform, characters } = player;
  console.log(player)
  let action;
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
}

PlayerCharacters.propTypes = {
  player: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps)(PlayerCharacters);



const SongList = ({ dispatch, songList }) => {
  let action;
  return (
    <div>
      <em>Or select from our list:</em>
      {Object.keys(songList).map(songId => {
        let song = songList[songId];
        return <li key = {songId} onClick = {() => {
          if (song.arrayPosition > 0){
            dispatch(restartSong(songId));
          }
          dispatch(changeSong(songId));
        }}>
          {song.title} by {song.artist}</li>;
      })}
    </div>
  );
};