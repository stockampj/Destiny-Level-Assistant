import React from 'react';
import PropTypes from 'prop-types';

function TierButton (props){
  let currentlySelectedClass = (props.selectedTier === props.index) ? 'currently-selected' : '';
  return (
    <div className={`side-nav-button ${currentlySelectedClass}`} onClick={()=>{props.onTierSelection(props.index);}}>
      <style>{`
          .side-nav-button{
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
            transition: margin-right .2s, color .1s, box-shadow .1s, background-color, .2s;
          }
          .side-nav-button:hover{
            margin-right: 2px;
            box-shadow: 4px 5px 5px -3px rgba(255,255,255,.3);
            color: rgba(255,255,255,1);
          }
          .currently-selected {
            background-color: rgba(194, 237, 255, 0.6);
            margin-right: 0px;
            color: rgba(255,255,255,1);
            box-shadow: 4px 5px 5px -3px rgba(255,255,255,.4), inset 0px 0px 8px 1px rgba(255,255,255,.2); 
          }
          .currently-selected:hover {
            background-color: rgba(194, 237, 255, 0.6);
            margin-right: 0px;
            color: rgba(255,255,255,1);
            box-shadow: 4px 5px 5px -3px rgba(255,255,255,.4), inset 0px 0px 8px 1px rgba(255,255,255,.2);
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