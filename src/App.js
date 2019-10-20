import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import './App.css';

import avengers from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers,
    };
  }
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={Home}/>
       <Route path="/avengers" component={AvengersList} />
      </div>
    );
  }
}

export default App;
