import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMembershipId } from './../actions';
import PropTypes from 'prop-types';
import Equipment from './Equipment';

function EquipmentDisplay({ dispatch, player, selectedCharacter, manifest }) {
  let weapons = player.weapons;
  let charArmor;
  let lightLevelAverage;
  let lightRemainder;
  let lightReminderPercentagestring = '0%';
  let equipmentToDisplay=[];
  let showComponentClass='hide-me';
  if(selectedCharacter !== 0){
    showComponentClass='';
    let lightAverageMatrix= [];
    let maxDeviation;
    charArmor = player.characters[selectedCharacter].charArmor;
    let equipmentObject = Object.assign({}, charArmor, weapons);
    Object.keys(equipmentObject).forEach(key=>{
      let individualLightLevel=equipmentObject[key].itemLightLevel;
      lightAverageMatrix.push(individualLightLevel);
    });
    let sum=0;
    lightAverageMatrix.forEach((lightLevel)=>{
      sum+=lightLevel;
    });
    lightLevelAverage = parseInt(sum/lightAverageMatrix.length);
    lightRemainder = sum%lightAverageMatrix.length;
    if(lightRemainder===0){
      lightRemainder=8;
    }
    lightReminderPercentagestring = `${(lightRemainder/8)*100}%`;
    maxDeviation=Math.abs(Math.max(...lightAverageMatrix)-lightLevelAverage)
    Object.keys(equipmentObject).forEach(key=>{
      let gear=equipmentObject[key];
      let path='';
      if((manifest['manifest'])&&(gear.itemHash!==-1)){
        path = `https://www.bungie.net${manifest['manifest']['DestinyInventoryItemDefinition'][gear.itemHash]['displayProperties']['icon']}/`;
      }
      if(path===''){
        showComponentClass='hide-me';
      }
      let gearJSX = <Equipment 
        armorType={key}
        iconPath={path}
        itemLightLevel={gear.itemLightLevel}
        lightLevelAverage={lightLevelAverage}
        maxDeviation={maxDeviation}
      />;
      equipmentToDisplay.push(gearJSX);
    });
    
    
  }
  
  
  return (
    <div>
      <style>{`
        .display-space{

          margin-top: 140px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .equipment-holder {
          display: flex;
          flex-direction: column;
          width: 130px;
          border: solid 1px rgba(255,255,255,.3);
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
          color: white;
          position:relative;
          padding: 5px;
        }
        .hide-me{
          display: none;
        }
        .light-display{
          height: 70px;
          width: 120px;
          margin: 5px;
          color: white;
          position: relative;
          padding: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px rgba(255,255,255,.1);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
        }
        .light-level-average{
          font-size: 60px;
          color: rgba(245, 200, 1);
        }
        .light-remainder-bar{
          position: absolute;
          bottom: 0px;
          left: 0px;
          height: 8px;
          width: ${lightReminderPercentagestring};
          background-color: rgba(255,255,255,.2);
        }
      `}</style>
      <div className={'display-space'}>
        <div className={`equipment-holder ${showComponentClass}`}>
          <div className='light-display'>
            <p className="light-level-average">{lightLevelAverage}</p>
            <div className='light-remainder-bar'></div>
          </div>
          {equipmentToDisplay[0]}
          {equipmentToDisplay[1]}
          {equipmentToDisplay[2]}
          {equipmentToDisplay[3]}
          {equipmentToDisplay[4]}
          {equipmentToDisplay[5]}
          {equipmentToDisplay[6]}
          {equipmentToDisplay[7]}
        </div>

        {/* <div className={'equipment-holder'}>
          <div className='light-display'>
            <p className="light-level-average">569</p>
            <div className='light-remainder-bar'></div>
          </div>
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={305}
            maxDeviation={7}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          <Equipment 
            armorType={'helmet'}
            iconPath={'https://www.bungie.net/common/destiny2_content/icons/b8025a8d16086b3c5b5b34c9c1a7c299.jpg/'}
            itemLightLevel={309}
            lightLevelAverage={456}
          />
          
        </div> */}
      </div>
    </div>
  );
}

EquipmentDisplay.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    player: state.player,
    selectedCharacter: state.selectedCharacter,
    manifest: state.manifest
  };
};


export default connect(mapStateToProps)(EquipmentDisplay);