import React from 'react';
import PropTypes from 'prop-types';
import constants from './../constants';
import { connect } from 'react-redux';
import { changeSelectedPlayer } from '../actions/selectCharacter';
const { classDefinitions } = constants;

function CharacterDisplay(props) {
  let isCurrentlySelected = false;
  if (props.selectedCharacter == props.characterIndex){
    isCurrentlySelected = true;
  }

  const onCharacterChange = () => {
    props.dispatch(changeSelectedPlayer(props.characterIndex));
  };

  let bannerURL1=`url(https://www.bungie.net${props.emblemPath[0]}/)`;
  let bannerURL2=`url(https://www.bungie.net${props.emblemPath[1]}/)`;
  let bannerURL3=`url(https://www.bungie.net${props.emblemPath[2]}/)`;
  let backgroundClassName;
  if (props.characterIndex ===1){
    backgroundClassName='emblem1';
  } else if (props.characterIndex ===2){
    backgroundClassName='emblem2';
  } else if (props.characterIndex ===3){
    backgroundClassName='emblem3';
  }
  let borderHighlightClass = (isCurrentlySelected) ? 'highlight-border': '';

  return  (
    <div>
      <style jsx>{`
        .display-holder {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100px;
          width: 300px;
          overflow: hidden;
          margin-left: 8px;
          margin-top: 5px;
          border: solid 1px rgba(255,255,255,.3);
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
          color: rgba(255,255,255,.5);
          background-size: auto 102%;
          background-position: top left -2px;
          background-repeat: no-repeat;
          transition: margin-top .2s, color .1s, box-shadow .1s;
        }
        .display-holder:hover {
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.3);
          color: rgba(255,255,255,.8);
          margin-top: 3px;
        }
        .emblem1 {
          background-image: ${bannerURL1};
        }
        .emblem2 {
          background-image: ${bannerURL2};     
        }
        .emblem3 {
          background-image: ${bannerURL3};      
        }
        .titles {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
          width: 70%;
        }
        .characterClass {
          margin: 5px;
          font-size: 45px;
          font-weight: 100;
          margin: 0;
          font-family: 'Oswald', sans-serif;
        }
        .characterRace {
          margin: 5px;
          font-size: 20px;
          font-weight: 100;
          margin: 0;
          font-family: 'EB Garamond', serif;
        }
        .highlight-border {
          border: solid 1px rgba(255,255,255,.4);
          color: rgba(255,255,255,.8);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.3), inset 0px 0px 8px 1px rgba(255,255,255,.4);
        }
        .highlight-border:hover {
          border: solid 1px rgba(255,255,255,.4);
          color: rgba(255,255,255,.8);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.3), inset 0px 0px 8px 1px rgba(255,255,255,.4);
          margin-top: 5px;
        }
        
      `}</style>
      <div className={`display-holder ${backgroundClassName} ${borderHighlightClass}`} onClick={onCharacterChange}>
        <div className="titles">
          <h3 className='characterClass'>{classDefinitions[props.classHash]}</h3>
          <h3 className='characterRace'>{classDefinitions[props.raceHash]}</h3>
        </div>
      </div>

    </div>
  );
}

export default connect()(CharacterDisplay);