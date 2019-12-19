import React from 'react';
import { connect } from 'react-redux';

function TierSelector({ dispatch, selectedTier}){ 

  return (
    <div>
      <style>{`
        .bottom-nav-row {
          position: fixed;
          bottom: 0px;
          left: 0px;
          height: 110px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          z-index: 1;
          color: white;
        }
      `}</style>
      <div className='bottom-nav-row'>
        <div className='bottom-nav-cluster'>
          <div>
            <h1>TIER 1</h1>
          </div>
          <div>
            <h1>TIER 2</h1>
          </div>
          <div>
            <h1>TIER 3</h1>
          </div>
          <div>
            <h1>Pinnacle</h1>
          </div>
        </div>
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
