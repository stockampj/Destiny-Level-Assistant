import React from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';

function Equipment({armorType, iconPath, itemLightLevel, lightLevelAverage, maxDeviation, dispatch}){
  let lightDifference = itemLightLevel-lightLevelAverage;
  let percentageBarNumber = Math.abs(lightDifference/5);
  if (percentageBarNumber>1){percentageBarNumber=1};
  percentageBarNumber= parseInt(500*percentageBarNumber)
  let armorIdCSS = `#${armorType}{width: ${percentageBarNumber}px;}`;
  console.log(maxDeviation, itemLightLevel, lightLevelAverage, lightDifference);
  let barClass = (lightDifference>=0) ? 'gear-bar-positive' : 'gear-bar-negative';

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
        .gear-bar-positive{
          position: absolute;

          bottom: 0px;
          left: 140px;
          height: 100%;
          background-color: rgba(255, 255, 255,.3);
          overflow: hidden;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .gear-bar-negative{
          position: absolute;

          bottom: 0px;
          right: 140px;
          height: 100%;
          background-color: rgba(225, 173, 153,.3);
          overflow: hidden;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .gear-offset{
          color: white;
          font-size: 30px;
          margin: 10px;
        }
        ${armorIdCSS}
      `}</style>
      <div className='individual-equipment-holder'>
        <img className='gear-icon' src={iconPath} alt=""/>
        <div className='gear-type-holder'>
          <p className="gear-light-level">{itemLightLevel}</p>
          <p className='gear-type'>{armorType}</p>
        </div>
        <div className={barClass} id={`${armorType}`}>
          <p className='gear-offset'>{lightDifference}</p>
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