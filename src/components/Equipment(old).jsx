import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

function Equipment({armorType, iconPath, itemLightLevel, lightLevelAverage, maxDeviation, selectedTier, dispatch}){
  
  let maxBarWidth = 540;
  let barDivisions = 6;
  let pixelOffset = 2;

  let lightDifference = itemLightLevel-lightLevelAverage;
  let lightDifferenceString = (lightDifference>=0) ? `+${lightDifference}` : `${lightDifference}`;
  let barClass = (lightDifference>=0) ? 'gear-bar-positive' : 'gear-bar-negative';
  let percentageBarNumber = (Math.abs(lightDifference/5)>1) ? 1 : Math.abs(lightDifference/barDivisions);
  percentageBarNumber= parseInt(maxBarWidth*percentageBarNumber)
  let armorBaseLightCSS = (selectedTier===0) ? (`#${armorType}{width: ${percentageBarNumber}px;}`) : (`#${armorType}{width: 0px;}`);

  let tierModifier = selectedTier;
  let adjustedModifierNumber;
  if ((tierModifier<=lightDifference)&&(lightDifference>0)){
    adjustedModifierNumber = 0;
  } else if ((tierModifier>lightDifference)&&(lightDifference>0)) {
    adjustedModifierNumber = tierModifier - lightDifference;
  } else {
    adjustedModifierNumber= tierModifier;
  }

  if (lightDifference<=0){
    pixelOffset= 0;
  }

  let modifierBarNumber = (tierModifier == 0) ? 0 : ((adjustedModifierNumber*(maxBarWidth/barDivisions))-pixelOffset);
  let armorModifierCSS = `#${armorType}-modifier{width: ${modifierBarNumber}px; margin-left: ${pixelOffset}px; transition: width .5s}`;

  let positiveBarContentBase= <div className='light-level-bar' id={`${armorType}`}></div>;
  let negativeBarContentBase= <div className='light-level-bar' id={`${armorType}`}></div>;
  let modifierBarContent= <div className='modifier-bar' id={`${armorType}-modifier`}></div>

  if ((lightDifference>=0)&&(tierModifier===0)){
    positiveBarContentBase= <div className='light-level-bar' id={`${armorType}`}>
       <p className='gear-offset'>{lightDifferenceString}</p>
    </div>
  } else if(lightDifference>=0){
        positiveBarContentBase= <div className='light-level-bar' id={`${armorType}`}>
       <p className='gear-offset'>{lightDifferenceString}</p>
    </div>
  }else if (tierModifier !== 0){
    negativeBarContentBase = null;
  } else {
    negativeBarContentBase = <div className='light-level-bar' id={`${armorType}`}>
      <p className='gear-offset'>{lightDifferenceString}</p>
    </div>
  }
  if (tierModifier !== 0) {
    modifierBarContent = <div className='modifier-bar' id={`${armorType}-modifier`}>

    </div>
  }

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
        .bar-display-holder-positive{
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
        ${armorModifierCSS}

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
        <div className='bar-display-holder-positive'>
          {positiveBarContentBase}
          {modifierBarContent}
        </div>
        <div className='bar-display-holder-negative'>
          {negativeBarContentBase}
        </div>
        <div className={barClass} >

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