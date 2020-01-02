import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import { changeSelectedTier } from '../actions/selectTier';
import TierButton from './TierButton';
const { types } = constants;

function TierSelector({ dispatch, selectedTier}){ 

  const handleTierSelection = (index) => {
    console.log("TIER SELECTOR: ", index)
    dispatch(changeSelectedTier(index))
  } 
  return (
    <div>
      <style>{`
        .bottom-nav-row {
          position: fixed;
          bottom: 0px;
          left: 0px;
          height: 75px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          overflow: hidden;
          z-index: 1;
          color: white;
        }
      `}</style>
      <div className='bottom-nav-row'>
          <TierButton 
            tierName='Tier 1'
            index='1'
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Tier 2'
            index='2'
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Tier 3'
            index='3'
            onTierSelection = {handleTierSelection}
          />
          <TierButton 
            tierName='Pinnacle'
            index='4'
            onTierSelection = {handleTierSelection}
          />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedTier: state.selectedTier
  };
};

export default connect(mapStateToProps)(TierSelector);