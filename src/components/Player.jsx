import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { restartSong, changeSong } from './../actions';


function Player({ dispatch, player}){
  let { userName, bNetId, platform, characters } = player;
  let platformRender;
  if (platform === 0) {
    platformRender = <p>WeirdBOX</p>;
  } else if (platform === 1){
    platformRender = <p>XBOX</p>;
  } else if (platform===2){
    platformRender = <p>PS4</p>;            
  }
  let action;
  return (
    <div>
      <p>{userName}</p>
      {platformRender}
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps)(Player);



// const SongList = ({ dispatch, songList }) => {
//   let action;
//   return (
//     <div>
//       <em>Or select from our list:</em>
//       {Object.keys(songList).map(songId => {
//         let song = songList[songId];
//         return <li key = {songId} onClick = {() => {
//           if (song.arrayPosition > 0){
//             dispatch(restartSong(songId));
//           }
//           dispatch(changeSong(songId));
//         }}>
//           {song.title} by {song.artist}</li>;
//       })}
//     </div>
//   );
// };