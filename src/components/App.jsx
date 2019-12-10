import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function App(){
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
}

export default connect()(App);