const itemStats = {
  itemHash: -1,
  itemInstanceId: -1,
  itemLightLevel: -1,
  bucketHash: -1
};

const charStats = {
  lightLevel: -1,
  charId: -1,
  classHash: -1,
  raceHash: -1,
  emblemPath: '',
  charArmor: {
    head: itemStats,
    arms: itemStats,
    chest: itemStats,
    legs: itemStats,
    class: itemStats  
  }
};

const activeplayer = {
  userName: '',
  isFetching: false,
  bNetId: -1,
  membershipType: -1,
  characters: {
    1: charStats,
    2: charStats,
    3: charStats
  },
  weapons: {
    kinetic: itemStats,
    energy: itemStats,
    power: itemStats
  }
};

const manifest = {};

export const initialState = {
  player: activeplayer,
  manifest: manifest,
  selectedCharacter: 0,
  selectedTier: 0,
};

