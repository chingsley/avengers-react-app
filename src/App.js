import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';
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
       <Route exact path="/avengers" component={AvengersList} />
       <Route path="/avengers/:id" component={AvengerPage} />
      </div>
    );
  }
}

export default App;
