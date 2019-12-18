import React from 'react';
import PropTypes from 'prop-types';
import constants from './../constants';
import { connect } from "react-redux";
import { changeSelectedPlayer } from '../actions/selectCharacter';
const { classDefinitions } = constants;

function CharacterDisplay(props) {
  let isCurrentlySelected = false;
  console.log("selected Character",props.selectedCharacter)
  console.log("characterIndex",props.characterIndex)
  if (props.selectedCharacter == props.characterIndex){
    isCurrentlySelected= true;
  }

  const onCharacterChange = () => {
    props.dispatch(changeSelectedPlayer(props.characterIndex));
  }

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
          margin: 5px;
          border: solid 1px rgba(255,255,255,.3);
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
        }
        .emblem1 {
          background-image: ${bannerURL1};
          background-position: cover;
          background-repeat: none;
        }
        .emblem2 {
          background-image: ${bannerURL2};
          background-position: cover;
          background-repeat: none;
        }
        .emblem3 {
          background-image: ${bannerURL3};
          background-position: cover;
          background-repeat: none;
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
          color: rgba(255,255,255,.6)
        }
        .characterRace {
          margin: 5px;
          font-size: 20px;
          font-weight: 100;
          margin: 0;
          font-family: 'EB Garamond', serif;
          color: rgba(255,255,255,.6)
        }
        
      `}</style>
      <div className={`display-holder ${backgroundClassName}`} onClick={onCharacterChange}>
        <div className="titles">
          <h3 className='characterClass'>{classDefinitions[props.classHash]}</h3>
          <h3 className='characterRace'>{classDefinitions[props.raceHash]}</h3>
        </div>
      </div>

    </div>
  );
}

export default connect()(CharacterDisplay);