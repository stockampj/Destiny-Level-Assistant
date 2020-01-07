import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
import { changeSelectedTier } from '../actions/selectTier';
import { savePreviousState } from '../actions/previousState';
import TierButton from './TierButton';
const { types } = constants;

function TierSelector({ dispatch, selectedTier}){ 

  const handleTierSelection = (index) => {
    dispatch(changeSelectedTier(index))
    dispatch(savePreviousState(selectedTier))
  } 
  return (
    <div>
      <style>{`
        .side-nav-column {
          position: fixed;
          bottom: 0px;
          right: 0px;
          height: 80%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-direction: column-reverse;
          overflow: hidden;
          z-index: 1;
          color: white;
          padding: 20px;
        }
      `}</style>
      <div className='side-nav-column'>
          <TierButton 
            tierName='Gear-View'
            index={0}
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Normal'
            index={1}
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Tier 1'
            index={3}
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Tier 2'
            index={4}
            onTierSelection = {handleTierSelection}   
          />
          <TierButton 
            tierName='Tier 3'
            index={5}
            onTierSelection = {handleTierSelection}
          />
          <TierButton 
            tierName='Pinnacle'
            index={6}
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