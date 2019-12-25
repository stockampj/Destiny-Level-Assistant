import React from 'react';
import Background from './Background';
import BackgroundMovement from './BackgroundMovement';
import SearchAndSelectionTools from './SearchAndSelectionTools';
import BackgroundDistant from './BackgroundDistant';
import EquipmentDisplay from './EquipmentDisplay';
import TierSelector from './TierSelector';


function App(){
  return (
    <div>
      <BackgroundDistant />
      <Background />
      <BackgroundMovement />
      <SearchAndSelectionTools />
      <EquipmentDisplay />
      <TierSelector />
    </div>
  );
}

export default App;