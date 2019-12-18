import React from 'react';
// import background from '../media/images/mars-large.png';
// import BackgroundMovement from './BackgroundMovement';

function BackgroundDistant(){
  return(
    <div className="app-background-distant">
      <style jsx>{`
        .app-background-distant{
          position: fixed;
          z-index: -3;
          display: block;
          margin-left: -10%;
          margin-top: -10%;
          width: 140%;
          height: 140%;
          background: rgb(3,18,20);
background: linear-gradient(143deg, rgba(3,18,20,1) 0%, rgba(27,46,68,1) 30%, rgba(0,0,0,1) 100%);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
// background: linear-gradient(143deg, rgba(76,114,122,1) 0%, rgba(163,171,180,1) 30%, rgba(61,98,106,1) 100%);
export default BackgroundDistant;