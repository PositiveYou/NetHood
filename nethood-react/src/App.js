import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToolBar from './comps/ToolBar';
import Navigation from './comps/Navigation';
import Site from './comps/Site';

import { createStore } from 'redux';
import user from './reducers/user';

const store = createStore(user);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolBar user={store}/>
        <Navigation />
        <Site>
          <p>Comming Soon</p>
        </Site>
      </div>
    );
  }
}

export default App;
