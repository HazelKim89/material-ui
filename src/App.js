import React, { Component } from 'react';
import CopyTest from './Main/Base.js'
import MainInside from './Main/Inside.js'
import './App.css';

class App extends Component {
  render() {
    const main = <MainInside />
    return (
      <div className="App">
        <CopyTest insideMain={main} />
      </div>
    );
  }
}

export default App;
