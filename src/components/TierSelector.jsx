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
          justify-content: space-around;
          overflow: hidden;
          z-index: 1;
          color: white;
        }
        .bottom-nav-cluster{
          border: solid thin white;
          margin: 0px;
          height: 50px;
          width: 200px;
        }
      `}</style>
      <div className='bottom-nav-row'>
            <h1 className='bottom-nav-cluster'>TIER 1</h1>
            <h1 className='bottom-nav-cluster'>TIER 2</h1>
            <h1 className='bottom-nav-cluster'>TIER 3</h1>
            <h1 className='bottom-nav-cluster'>Pinnacle</h1>
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
