const manifest = {};

const activeplayer = {
  userName: 'Robot Chickens',
  bNetId: '888',
  platform: 1,
  characters: {
    1: {
      lightLevel: 750,
      characterId: 1
    },
    2: {
      lightLevel: 750,
      characterId: 2
    },
    3: {
      lightLevel: 750,
      characterId: 3
    }
  }
};

export const initialState = {
  player: activeplayer
};

