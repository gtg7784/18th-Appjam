import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import './App.scss';

import Header from '../components/Header/Header'
import Home from './Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App)
