import React, { Component } from 'react';
import CopyTest from './Main/Copy.js'
import Inside from './Main/Inside.js'
import './App.css';

class App extends Component {
  render() {
    const insideMain = <Inside />
    return (
      <div className="App">
        <CopyTest insideMain={insideMain} list={list.menues}>
        </CopyTest>
      </div>
    );
  }
}

export default App;
