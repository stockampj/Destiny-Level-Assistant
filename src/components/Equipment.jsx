import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Equipment({armorType, iconPath, itemLightLevel, dispatch}){
  console.log(iconPath);
  return (
    <div>
      <img src={iconPath} alt=""/>
      <p>{armorType}</p>
      <p>{itemLightLevel}</p>
    </div>
  );
}

Equipment.propTypes = {
  player: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Equipment);