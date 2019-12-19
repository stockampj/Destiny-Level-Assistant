import React from 'react';
import background from '../media/images/mars-large.png';
import BackgroundMovement from './BackgroundMovement';

function Background(){
  return(
    <div className="app-background">
      <style>{`
        .app-background{
          position: fixed;
          z-index: -2;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          height: 100%;
          background-image: url(${background});
          background-size: cover;
          background-position: center, center;
          opacity: .3;
        }
      `}</style>
    </div>
  );
}

export default Background;