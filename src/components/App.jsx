import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import PlayerSearch from './PLayerSearch';


function App(){
  return (
    <div>
      <PlayerSearch />
      <Player />
    </div>
  );
}

export default App;