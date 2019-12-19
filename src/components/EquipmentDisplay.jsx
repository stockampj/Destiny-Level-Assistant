import React from 'react';
import { connect } from 'react-redux';
import { fetchPlayerMembershipId } from './../actions';
import PropTypes from 'prop-types';
import Equipment from './Equipment';

function EquipmentDisplay({ dispatch, player, selectedCharacter, manifest }) {
  console.log("manifest: ",manifest);

  let weapons = player.weapons;
  let charArmor;
  let equipmentToDisplay=[];
  let showComponentClass='hide-me'
  if(selectedCharacter !== 0){
    showComponentClass='';
    charArmor = player.characters[selectedCharacter].charArmor;
    let equipmentObject = Object.assign({}, charArmor, weapons)
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
      />
      equipmentToDisplay.push(gearJSX)
    })
    console.log("equipmentToDisplay", equipmentToDisplay);
  }
  return (
    <div>
      <style>{`
        .equipment-holder {
          display: flex;
          flex-direction: column;
          height: 800px;
          width: 300px;
          overflow: hidden;
          margin-top: 140px;
          border: solid 1px rgba(255,255,255,.3);
          background-color: rgba(0, 0, 0, .3);
          box-shadow: 4px 5px 5px -3px rgba(255,255,255,.1);
          color: white;
        }
        .equipment {
          height: 80px;
          width: 80px;
          background-color: rgba(0,0,0,1);
          margin-left: 5px;
          margin-top: 5px;
        }
        .hide-me{
          display: none;
        }
        
      `}</style>

      <div className={`equipment-holder ${showComponentClass}`}>
        {equipmentToDisplay[0]}
        {equipmentToDisplay[1]}
        {equipmentToDisplay[2]}
        {equipmentToDisplay[3]}
        {equipmentToDisplay[4]}
        {equipmentToDisplay[5]}
        {equipmentToDisplay[6]}
        {equipmentToDisplay[7]}
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