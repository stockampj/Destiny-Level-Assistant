import React from 'react';
import { connect } from 'react-redux';
import PlayerSearch from './PlayerSearch';
import CharacterDisplay from './CharacterDisplay';

function SearchAndSelectionTools({ dispatch, player, selectedCharacter}){
  let { userName, characters } = player;  

  const updateRenderedCharacters = () => {
    let character1 = <CharacterDisplay
      selectedCharacter={selectedCharacter}
      lightLevel={characters[1].lightLevel}
      classHash={characters[1].classHash}
      raceHash={characters[1].raceHash}
      emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
      characterIndex={1}
      charId={characters[1].charId}
      key={1}
    />;
    let character2 = <CharacterDisplay 
      selectedCharacter={selectedCharacter}
      lightLevel={characters[2].lightLevel}
      classHash={characters[2].classHash}
      raceHash={characters[2].raceHash}
      emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
      characterIndex={2}
      charId={characters[2].charId}
      key={2}
    />;
    let character3 = <CharacterDisplay
      selectedCharacter={selectedCharacter} 
      lightLevel={characters[3].lightLevel}
      classHash={characters[3].classHash}
      raceHash={characters[3].raceHash}
      emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
      characterIndex={3}
      charId={characters[3].charId}
      key={3}
    />;
    let renderedCharacters=[character1,character2,character3];
    renderedCharacters.forEach((character, index) =>{
      if(characters[index+1].emblemPath===''){
        renderedCharacters[index]=null;
      }
    });
    return renderedCharacters;
  };
  let updatedRenderedCharacters=updateRenderedCharacters();

  return (
    <div>
      <style>{`
        .top-nav-row {
          position: fixed;
          top: 0px;
          left: 0px;
          height: 110px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          z-index: 1;
          color: white;
        }

        .btn-text {
          {/* font-family: 'UnifrakturCook', cursive; */}
        }

        .nav-cluster {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
        }
        .nav-item {
          color: rgba(255,255,255,.8);
          font-weight: 600;
          margin-right: 10px;
        }
        .nav-item:hover {
          color: rgba(255,255,255,1);
          background-color: rgba(255,255,255,.1);
        }
        body {
          font-family: 'Bebas Neue', cursive;
          
        }
        p{
          margin: 0px;
        }
      `}</style>
      <div className='top-nav-row'>
        <div className='nav-cluster'>
          {updatedRenderedCharacters[0]}
          {updatedRenderedCharacters[1]}
          {updatedRenderedCharacters[2]}
        </div>
        <div className='nav-cluster'>
          <PlayerSearch userName={userName}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    player: state.player,
    selectedCharacter: state.selectedCharacter
  };
};

export default connect(mapStateToProps)(SearchAndSelectionTools);
