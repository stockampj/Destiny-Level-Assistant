const activeplayer = {
  userName: 'Generic Name',
  isFetching: false,
  bNetId: '404',
  platform: 1,
  characters: {
    1: {
      lightLevel: -1,
      charId: 1
    },
    2: {
      lightLevel: -1,
      charId: 2
    },
    3: {
      lightLevel: -1,
      charId: 3
    }
  }
};

const manifest = {};

export const initialState = {
  player: activeplayer,
  manifest: manifest
};

