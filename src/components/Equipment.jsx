import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

function Equipment({armorType, iconPath, itemLightLevel, lightLevelAverage, maxDeviation, selectedTier, dispatch}){
  
  let maxBarWidth = 540;
  let barDivisions = 6;
  let pixelOffset = 2;
  let tierModifier = selectedTier;
  let baseBarSize = () => {
    console.log('hello')
    let width = 0;
    let lightDelta = itemLightLevel-lightLevelAverage;
    if (selectedTier === 0){
      width = Math.abs(lightDelta);
    } else {
      width = tierModifier-lightDelta;
      if (width<0){width=0};
    }
    console.log(width);
    return width;
  }
  baseBarSize();
  let lightDifference = itemLightLevel-lightLevelAverage;

  let lightDifferenceString = (lightDifference>=0) ? `+${lightDifference}` : `${lightDifference}`;
  let barClass = (lightDifference>=0) ? 'gear-bar-positive' : 'gear-bar-negative';
  let percentageBarNumber = (Math.abs(baseBarSize()/barDivisions)>1) ? 1 : Math.abs(baseBarSize()/barDivisions);
  percentageBarNumber= parseInt(maxBarWidth*percentageBarNumber)
  console.log(percentageBarNumber);
  let armorBaseLightCSS = `#${armorType}{width: ${percentageBarNumber}px;transition: width .5s;}`;
  let positiveBarContentBase= <div className='light-level-bar' id={`${armorType}`}></div>;

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
          width: 540px;
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
          width: 540px;
        }
        .gear-offset{
          color: white;
          font-size: 30px;
          margin: 10px;
        }
        ${armorBaseLightCSS}


        .light-level-bar{
          height: 100%;
          background-color: rgba(255, 255, 255,.3);
        }
        .modifier-bar{
          height: 100%;
          background-color: rgba(128, 198, 120,.3);
          width: 0px;
        }
        .bar-display-holder-negative div{
          background-color: rgba(225, 173, 153,.3);
        }
      `}</style>
      <div className='individual-equipment-holder'>
        <img className='gear-icon' src={iconPath} alt=""/>
        <div className='gear-type-holder'>
          <p className="gear-light-level">{itemLightLevel}</p>
          <p className='gear-type'>{armorType}</p>
        </div>
        <div className={barHolderClass}>
          {positiveBarContentBase}
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