import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Player({ dispatch, player}){
  let { userName, bNetId, membershipType, characters, isFetching } = player;
  let membershipTypeRender;
  if (membershipType === 0) {
    membershipTypeRender = <p>WeirdBOX</p>;
  } else if (membershipType === 1){
    membershipTypeRender = <p>XBOX</p>;
  } else if (membershipType===2){
    membershipTypeRender = <p>PS4</p>;            
  }
  return (
    <div>
      <p>{userName}</p>
      <p>{bNetId}</p>
      {membershipTypeRender}
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