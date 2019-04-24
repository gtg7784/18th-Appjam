import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'
import './App.scss';

import Header from '../components/Header/Header'
import Home from './Home/Home'
import Alert from './Alert/Alert'
import Helps from './Helps/Helps'
import Settings from './Settings/Settings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/alert" exact component={Alert}/>
          <Route path="/helps" exact component={Helps}/>
          <Route path="/settings" exact component={Settings}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App)
