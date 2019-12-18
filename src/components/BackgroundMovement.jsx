import React from 'react';
import backgroundMovement from '../media/images/mapLines.png';

function BackgroundMovement(){
  return(
    <div className="app-background-movement">
      <style jsx>{`
        .app-background-movement{
          position: fixed;
          z-index: -1;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 200%;
          height: 200%;
          background-image: url(${backgroundMovement});
          background-position: center, center;
          background-size: 80%;
          background-repeat: no-repeat;
          opacity: .1;
          animation: rotation 1200s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
      `}</style>
    </div>
  );
}

export default BackgroundMovement;