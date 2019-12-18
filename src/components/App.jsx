import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import Background from './Background';
import BackgroundMovement from './BackgroundMovement';
import SearchAndSelectionTools from './SearchAndSelectionTools';
import BackgroundDistant from './BackgroundDistant';


function App(){
  return (
    <div>
      <BackgroundDistant />
      <Background />
      <BackgroundMovement />
      <SearchAndSelectionTools />
      <Player />
    </div>
  );
}

export default App;