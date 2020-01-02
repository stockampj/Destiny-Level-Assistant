import React from 'react';
import PropTypes from 'prop-types';

function TierButton (props){
  console.log(props)
  return (
    <div className='bottom-nav-cluster' onClick={()=>{props.onTierSelection(props.index);}}>
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
            margin: 20px;
          }
          .tier-name{
            font-size: 2em;
          }
      `}</style>
      <p className='tier-name'>{props.tierName}</p>
    </div>
  )
}


export default TierButton;