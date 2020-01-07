import React from 'react';
import PropTypes from 'prop-types';

function TierButton (props){
  return (
    <div className='side-nav-cluster' onClick={()=>{props.onTierSelection(props.index);}}>
      <style>{`
          .side-nav-cluster{
            border: solid thin rgba(255,255,255,.2);
            height: 50px;
            width: 120px;
            display: flex;
            background-color: rgba(0, 0, 0, .3);
            background-color: rgba(255,255,255,.1);
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
            color: rgba(255,255,255,.7);
            background-size: auto 102%;
            transition: margin-right .2s, color .1s, box-shadow .1s;
          }
          .side-nav-cluster:hover{
            margin-right: 2px;
            box-shadow: 4px 5px 5px -3px rgba(255,255,255,.3);
            color: rgba(255,255,255,1);
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