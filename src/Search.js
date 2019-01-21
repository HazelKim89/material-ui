import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import App from './App'
import Test from './Test'

const App = <App />
const Test = <Test />

class Home extends Component {
  render(){
      return App
    }
}

// More components
class TestPage extends Component {
    render(){
        return Test
    }
}


render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/Test" component={TestPage}/>
    </Router>,
    document.getElementById('root')
);