import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import AllOwners from './components/AllOwners'
import AllDogs from './components/AllDogs'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/owner' component={AllOwners} />
          <Route exact path='/dog' component={AllDogs} />
        </Switch>
      </Router>
    )
  }
}