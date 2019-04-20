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
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App)
