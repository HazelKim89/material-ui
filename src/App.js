import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DeleteIcon></DeleteIcon>
        <DeleteForeverIcon />
      </div>
    );
  }
}

export default App;
