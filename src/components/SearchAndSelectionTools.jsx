import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PlayerSearch from './PlayerSearch';
import CharacterDisplay from './CharacterDisplay';

function SearchAndSelectionTools({ dispatch, player}){
  let { userName, bNetId, membershipType, characters, isFetching } = player;

  return (
    <div>
      <style jsx>{`
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
        
        .home-button {
          border-radius: 0%;
          font-weight: 800;
          height: 40px;
          color:  rgba(255,255,255,.8);
          text-shadow: 1px 1px 3px rgba(0,0,0,0.8);    
          border: none;
        }
         
        .home-button:hover {
          background: rgba(255,255,255, .1);
          color:  rgba(255,255,255,1);
          border-right: solid 1px rgba(255, 255, 255, 0.2);
        }
        
        .fas {
          font-size: 1.5em;
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
      `}</style>
      <div className='top-nav-row'>
        {/* <button className='btn home-button' to='/'><i className="fas fa-beer"><span className="btn-text"> HOME</span></i></button> */}
        <div className='nav-cluster'>

            <CharacterDisplay 
              lightLevel={characters[1].lightLevel}
              classHash={characters[1].classHash}
              raceHash={characters[1].raceHash}
              emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
              characterIndex={1}
              charId={characters[1].charId}
              key={1}
            />
            <CharacterDisplay 
              lightLevel={characters[2].lightLevel}
              classHash={characters[2].classHash}
              raceHash={characters[2].raceHash}
              emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
              characterIndex={2}
              charId={characters[2].charId}
              key={2}
            />
            <CharacterDisplay 
              lightLevel={characters[3].lightLevel}
              classHash={characters[3].classHash}
              raceHash={characters[3].raceHash}
              emblemPath= {[characters[1].emblemPath, characters[2].emblemPath, characters[3].emblemPath]}
              characterIndex={3}
              charId={characters[3].charId}
              key={3}
            />
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
    player: state.player
  };
};

export default connect(mapStateToProps)(SearchAndSelectionTools);
