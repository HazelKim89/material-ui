import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './routes/Home'
import First from './routes/First'
import Second from './routes/Second.js'
import Third from './routes/Third.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/0" component={First} />
            <Route exact path="/1" component={Second} />
            <Route exact path="/2" component={Third} />
          </Switch>
        </div>
      </Router>    
      )
    }
  }
  
  export default App;
  

// { <div className="App">
//   <CopyTest insideMain={main} />
// </div> }

// import MainInside from './Main/Inside.js'