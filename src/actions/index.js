import * as types from './../constants/ActionTypes';

export const changeState = (value1) => ({
  type: types.CHANGE_STATE,
  value1
});

const apiKey = process.env.apiKey;
const requestHeaderGET = ({
  headers: {
    'x-api-key': `${apiKey}`
  }
});

export function fetchPlayerMembershipId(userName) {
  return function (dispatch) {
    dispatch(searchForPlayer(userName));
    const userNameSearch = userName.replace(' ', '');
    return fetch(`https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/${userNameSearch}/`, requestHeaderGET).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
      ).then(function(json) {
      if ((json.Message === 'Ok')&&(json.Response.length>0)){
        const bNetId = json.Response[0].membershipId;
        const membershipType = json.Response[0].membershipType;       
        userName = json.Response[0].displayName;
        fetchPlayerProfileData(bNetId, membershipType, userName, dispatch);
      } else {
        console.log('could not find player');
        // ERROR CODE HANDLING NEEDED
      }
    });   
  };
}

export const searchForPlayer = (userName) => ({
  type: types.SEARCH_FOR_PLAYER,
  userName,
});

export const fetchPlayerProfileData = (bNetId, membershipType, userName, dispatch) => {
  console.log(bNetId, membershipType)
  return fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${bNetId}/?components=100`, requestHeaderGET).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    let characterIdArray;
    let char1Id = -1;
    let char2Id = -1;
    let char3Id = -1;
    if (json.Message === 'Ok'){
      if (json.Response.profile.data.characterIds){
        characterIdArray = json.Response.profile.data.characterIds;
        console.log(characterIdArray);
        for (let i=0; i<characterIdArray.length; i++){
          if (i===0){
            char1Id = characterIdArray[i];
          } else if (i===1){
            char2Id = characterIdArray[i];
          } else if (i===2){
            char3Id = characterIdArray[i];
          }
        }    
      }
    dispatch(updatePlayerCharacters(bNetId, membershipType, userName, char1Id, char2Id, char3Id));
    fetchEquippedItems(bNetId, membershipType, userName, char1Id, char2Id, char3Id, dispatch);
  } else {
      console.log(json.Message);
      // ERROR CODE HANDLING NEEDED
    }
  });
}

export const updatePlayerCharacters = (bNetId, membershipType, userName, char1Id, char2Id, char3Id) => ({
  type: types.UPDATE_PLAYER_CHARACTERS,
  userName,
  membershipType,
  bNetId,
  char1Id,
  char2Id,
  char3Id
});

function bucketFilter (bucketHash) {
  let bucketArray = [1498876634, 2465295065, 953998645, 1506418338, 3448274439, 3551918588, 14239492, 20886954, 1585787867];
  if (bucketArray.includes(bucketHash)){
    return true;
  }
  return false;
}

export const fetchEquippedItems = (bNetId, membershipType, userName, char1Id, char2Id, char3Id, dispatch) => {
  let char1Equipment = {};
  let char2Equipment = {};
  let char3Equipment = {};
  if (char1Id !== -1){
    return fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${bNetId}/Character/${char1Id}/?components=205`, requestHeaderGET)
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(json => {
      if (json.Message === 'Ok'){
        json.Response.equipment.data.items.forEach(item => {
          if (bucketFilter(item.bucketHash)){
            let itemObject = { [item.bucketHash]: item}
            char1Equipment = Object.assign({}, char1Equipment, itemObject);
          }
        })
        const equipmentArray = {
          [1]: char1Equipment,
          [2]: char2Equipment,
          [3]: char3Equipment
        }
        if (char2Id === -1){
          fetchEquipmentStats(bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray, dispatch);
        }
      }
      if (char2Id !== -1){
        return fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${bNetId}/Character/${char2Id}/?components=205`, requestHeaderGET)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        ).then(json => {
          if (json.Message === 'Ok'){
            json.Response.equipment.data.items.forEach(item => {
              if (bucketFilter(item.bucketHash)){
                let itemObject = { [item.bucketHash]: item}
                char2Equipment = Object.assign({}, char2Equipment, itemObject);
              }
            })
            const equipmentArray = {
              [1]: char1Equipment,
              [2]: char2Equipment,
              [3]: char3Equipment
            }
            if (char3Id === -1){
              fetchEquipmentStats(bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray, dispatch);
            }
          }
          if (char3Id !== -1){
            return fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${bNetId}/Character/${char3Id}/?components=205`, requestHeaderGET)
            .then(
              response => response.json(),
              error => console.log('An error occurred.', error)
            ).then(json => {
              if (json.Message === 'Ok'){
                json.Response.equipment.data.items.forEach(item => {
                  if (bucketFilter(item.bucketHash)){
                    let itemObject = { [item.bucketHash]: item}
                    char3Equipment = Object.assign({}, char3Equipment, itemObject);
                  }
                })
                const equipmentArray = {
                  [1]: char1Equipment,
                  [2]: char2Equipment,
                  [3]: char3Equipment
                }
                fetchEquipmentStats(bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray, dispatch);
              }
            })
          }
        })
      }
    })
  }
}

export const fetchEquipmentStats = (bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray, dispatch) => {
  console.log("You are a fountain of coding prowess");
  let equipmentArrayKeys = Object.keys(equipmentArray);
  equipmentArrayKeys.forEach(equipmentArrayKey => {
    let characterEquipment = equipmentArray[equipmentArrayKey];
    let characterEquipmentKeys = Object.keys(characterEquipment);
    characterEquipmentKeys.forEach(characterEquipmentKey =>{
      let item = characterEquipment[characterEquipmentKey];
      fetch(`https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${bNetId}/Item/${item.itemInstanceId}/?components=300`, requestHeaderGET)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      ).then(json =>{
        if (json.Message === 'Ok'){
          let itemLightLevel = 0;
          if (json.Response.instance.data.primaryStat){
            itemLightLevel = json.Response.instance.data.primaryStat.value;
          }
          const updatedItem = {
            itemHash: item.itemHash,
            itemInstanceId: item.itemInstanceId,
            bucketHash: item.bucketHash,
            itemLightLevel: itemLightLevel
          };
          equipmentArray[equipmentArrayKey][characterEquipmentKey] = updatedItem
          dispatch(updateEquipmentFromAPI(bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray));
        }
      })
    })
  })
}

export const updateEquipmentFromAPI = (bNetId, membershipType, userName, char1Id, char2Id, char3Id, equipmentArray) => ({
  type: types.UPDATE_EQUIPMENT_FROM_API,
  userName,
  membershipType,
  bNetId,
  char1Id,
  char2Id,
  char3Id,
  equipmentArray
});





