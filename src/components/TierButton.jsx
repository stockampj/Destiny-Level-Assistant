import React from 'react';
import PropTypes from 'prop-types';

function TierButton (props){
  console.log(props)
  return (
    <div className='bottom-nav-cluster'>
      <style>{`
          .bottom-nav-cluster{
            border: solid thin white;
            margin: 0px;
            height: 50px;
            width: 200px;
            display: flex;
            margin: 0px;
            background-color: darkred;
            justify-content: center;
            align-items: center;
          }
          .tier-name{
            font-size: 2em;
          }
      `}</style>
      <p className='tier-name' onClick={()=>{props.onTierSelection(props.index);}}>{props.tierName}</p>
    </div>
  )
}


export default TierButton;