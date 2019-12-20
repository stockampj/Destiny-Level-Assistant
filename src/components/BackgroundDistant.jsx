import React from 'react';

function BackgroundDistant(){
  return(
    <div className="app-background-distant">
      <style>{`
        .app-background-distant{
          position: fixed;
          z-index: -3;
          display: block;
          margin-left: -0px;
          margin-top: 0px;
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

export default BackgroundDistant;