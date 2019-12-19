import constants from './../constants';
const { initialState, types, bucketToType } = constants;

const playerReducer = (state = initialState.player, action) => {
  let newPlayerState;
  switch (action.type) {
  case types.SEARCH_FOR_PLAYER:
    newPlayerState = Object.assign({}, state, {
      userName: action.userName,
      isFetching: true
    });
    return newPlayerState;
  case types.RESET_PLAYER_GEAR:
    newPlayerState=initialState.player;
    return newPlayerState;
  case types.UPDATE_PLAYER_CHARACTERS:
    newPlayerState = Object.assign({}, state, {
      userName: action.userName,
      membershipType: action.membershipType,
      bNetId: action.bNetId,
      characters: {
        1: {
          lightLevel: -1,
          charId: action.char1Id,
          classHash: -1,
          raceHash: -1,
          emblemPath: '',
          charArmor: initialState.player.characters[1].charArmor
        },
        2: {
          lightLevel: -1,
          charId: action.char2Id,
          classHash: -1,
          raceHash: -1,
          emblemPath: '',
          charArmor: initialState.player.characters[2].charArmor
        },
        3: {
          lightLevel: -1,
          charId: action.char3Id,
          classHash: -1,
          raceHash: -1,
          emblemPath: '',
          charArmor: initialState.player.characters[3].charArmor
        }
      }
    });
    return newPlayerState;
  case types.UPDATE_CHARACTER_DETAILS:
    newPlayerState = Object.assign({}, state, {
      characters: {
        1: {
          lightLevel: state.characters[1].lightLevel,
          charId: state.characters[1].charId,
          classHash: action.classHash1,
          raceHash: action.raceHash1,
          emblemPath: action.emblemPath1,
          charArmor: initialState.player.characters[1].charArmor
        },
        2: {
          lightLevel: state.characters[2].lightLevel,
          charId: state.characters[2].charId,
          classHash: action.classHash2,
          raceHash: action.raceHash2,
          emblemPath: action.emblemPath2,
          charArmor: initialState.player.characters[2].charArmor
        },
        3: {
          lightLevel: state.characters[3].lightLevel,
          charId: state.characters[3].charId,
          classHash: action.classHash3,
          raceHash: action.raceHash3,
          emblemPath: action.emblemPath3,
          charArmor: initialState.player.characters[3].charArmor
        }
      }
    });
    return newPlayerState;
  case types.UPDATE_EQUIPMENT_FROM_API:
    let kineticWeapon = state.weapons.kinetic;
    let energyWeapon = state.weapons.energy;
    let powerWeapon = state.weapons.power;
    let artifact = state.artifact;
    let charArmorArray = [state.characters[1].charArmor, state.characters[2].charArmor, state.characters[3].charArmor ];
    let equipmentArrayKeys=[1,2,3];
    equipmentArrayKeys.forEach(equipmentArrayKey =>{
      const item = action.equipmentArray[equipmentArrayKey];
      if(Object.keys(item).length>=1){
        let tempCharArmor = {
          head: item[bucketToType.Helmet],
          arms: item[bucketToType.Gauntlets],
          chest: item[bucketToType.Chest],
          legs: item[bucketToType.Leg],
          class: item[bucketToType.ClassItem]  
        };
        Object.keys(charArmorArray[equipmentArrayKey-1]).forEach(itemKey => {
          let oldItem = charArmorArray[equipmentArrayKey-1][itemKey];
          let newItem = tempCharArmor[itemKey];
          tempCharArmor[itemKey] = (newItem.itemLightLevel>oldItem.itemLightLevel) ? newItem : oldItem;    
        });
        charArmorArray[equipmentArrayKey-1] = tempCharArmor;
      }
      if(item[bucketToType.Kinetic]){
        let weapon = item[bucketToType.Kinetic];
        if (weapon.itemLightLevel>=kineticWeapon.itemLightLevel){
          kineticWeapon = weapon;
        }
      }
      if(item[bucketToType.Energy]){
        let weapon = item[bucketToType.Energy];
        if (weapon.itemLightLevel>=energyWeapon.itemLightLevel){
          energyWeapon = weapon;
        }
      }
      if(item[bucketToType.Power]){
        let weapon = item[bucketToType.Power];
        if (weapon.itemLightLevel>=powerWeapon.itemLightLevel){
          powerWeapon = weapon;
        }
      }
      if(item[bucketToType.SeasonalArtifacts]){
        artifact = item[bucketToType.SeasonalArtifacts];
      }
    });
    const updatedWeapons = {
      kinetic: kineticWeapon,
      energy: energyWeapon,
      power: powerWeapon
    };
    newPlayerState = Object.assign({}, state, {
      weapons: updatedWeapons,
      artifact: artifact,
      characters: {
        1: {
          lightLevel: state.characters[1].lightLevel,
          charId: state.characters[1].charId,
          classHash: state.characters[1].classHash,
          raceHash: state.characters[1].raceHash,
          emblemPath: state.characters[1].emblemPath,
          charArmor: charArmorArray[0]
        },
        2: {
          lightLevel: state.characters[2].lightLevel,
          charId: state.characters[2].charId,
          classHash: state.characters[2].classHash,
          raceHash: state.characters[2].raceHash,
          emblemPath: state.characters[2].emblemPath,
          charArmor: charArmorArray[1]
        },
        3: {
          lightLevel: state.characters[3].lightLevel,
          charId: state.characters[3].charId,
          classHash: state.characters[3].classHash,
          raceHash: state.characters[3].raceHash,
          emblemPath: state.characters[3].emblemPath,
          charArmor: charArmorArray[2]
        }
      }
    });
    console.log(newPlayerState);
    return newPlayerState;
  default:
    return state;
  }
};

export default playerReducer;
