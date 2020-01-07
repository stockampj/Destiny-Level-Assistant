import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

function Equipment({armorType, iconPath, itemLightLevel, lightLevelAverage, maxDeviation, selectedTier, previousTier, dispatch}){

  let maxBarWidth = 540;
  let barDivisions = 6;
  let pixelOffset = 2;
  let tierModifier = selectedTier;
  let baseBarSize = () => {
    let width = 0;
    let lightDelta = itemLightLevel-lightLevelAverage;
    if (selectedTier === 0){
      width = Math.abs(lightDelta);
    } else {
      width = tierModifier-lightDelta;
      if (width<0){width=0};
    }
    return width;
  }
  let lightDifference = itemLightLevel-lightLevelAverage;
  let barValueDisplay = (selectedTier===0) ? ((lightDifference>0) ? `+${baseBarSize()}` : baseBarSize()*(-1)) : `+${baseBarSize()}`;

  let percentageBarNumber = (Math.abs(baseBarSize()/barDivisions)>1) ? 1 : Math.abs(baseBarSize()/barDivisions);
  percentageBarNumber= parseInt(maxBarWidth*percentageBarNumber);

  
  let lightGainRating = () =>{
    if (selectedTier !== 0){
      if (baseBarSize()>tierModifier){
        return 'full'
      } else if (baseBarSize()>0){
        return 'partial'
      } else if (baseBarSize()===0){
        return 'loss'
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
 
  let ratingIndicator = () => {
    switch(lightGainRating()){
      case 'full':
        return <div className='full-gain-indicator'></div>;
      case 'partial':
        return <div className='partial-gain-indicator'></div>;
      case 'loss':
        return <div className='loss-indicator'></div>;
      default:
        return null;
    };
  }
 

  let textFlexPosition = (tierModifier!==0) ? 'flex-end' : ((lightDifference>0) ? 'flex-end' : 'flex-start');
  let armorBaseLightCSS = `#${armorType}{display: flex; justify-content: ${textFlexPosition};  width: ${percentageBarNumber}px; overflow: hidden; transition: width .5s, background-color 1s;}`;
  let barContentBase = <div className={`light-level-bar`} id={`${armorType}`}><p className='bar-value-display'>{barValueDisplay}</p></div>;
  if (lightDifference<=0){
    pixelOffset= 0;
  }
  let barHolderClass='bar-display-holder';
  if ((lightDifference<0)&&(tierModifier===0)){barHolderClass='bar-display-holder-negative'}

  return (
    <div>
      <style>{`
        .individual-equipment-holder{
          height: 60px;
          width: 120px;
          margin: 5px;
          color: white;
          position: relative;
          padding: 0px;
        }
        .gear-icon{
          display: block;
          position:absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          border: solid 1px rgba(255,255,255,.3);
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
        }
        .gear-type-holder{
          margin: 0px;
          position: absolute;
          bottom: 0px;
          right: 0px;
          height: 100%;
          width: 50px;
          text-align: center;
        }
        .gear-light-level {
          display:block;
          color: white;
          font-size: 40px;
          padding: 0px;
        }
        .gear-type{
          display:block;
          font-size: 15px;
          margin-top: -8px;
          color: rgba(225, 224, 186, 1);
        }
        .bar-display-holder{
          position: absolute;

          bottom: 0px;
          left: 140px;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          
        }
        .bar-display-holder-negative{
          position: absolute;

          bottom: 0px;
          right: 140px;
          position: absolute;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          
        }
        .bar-value-display{
          color: white;
          font-size: 30px;
          margin: 10px;
        }
        ${armorBaseLightCSS}

        .light-level-bar{
          display: flex;
          height: 100%;
          background-color: rgba(255, 255, 255,.4);
        }

        .bar-display-holder-negative div{
          background-color: rgba(225, 173, 153,.3);
        }
        .full-gain-indicator{
          position: absolute;
          right: -65px;
          top: 15px;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          background-color: rgba(194, 237, 255, 0.5);
        }
        .partial-gain-indicator{
          position: absolute;
          right: -65px;
          top: 15px;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          background-color: rgba(251, 250, 143, 0.5);
        }
        .loss-indicator{
          position: absolute;
          right: -65px;
          top: 15px;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          background-color: rgba(225, 173, 153,.5);
        }
      `}</style>
      <div className='individual-equipment-holder'>
        <img className='gear-icon' src={iconPath} alt=""/>
        <div className='gear-type-holder'>
          <p className="gear-light-level">{itemLightLevel}</p>
          <p className='gear-type'>{armorType}</p>
        </div>
        {ratingIndicator()}
        <div className={barHolderClass}>
          {barContentBase}
        </div>
      </div>


    </div>
  );
}

Equipment.propTypes = {
  player: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(Equipment);