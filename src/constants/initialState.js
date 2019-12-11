const manifest = {};

const activeplayer = {
  userName: 'Generic Name',
  isFetching: false,
  bNetId: '404',
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

