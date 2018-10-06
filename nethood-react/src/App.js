import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToolBar from './comps/ToolBar'

import { createStore } from 'redux';
import kabab from './reducers/user';

const store = createStore(kabab);
console.log(store.getState());
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{store.getState()}</h1>
        {/* <ToolBar>

        </ToolBar> */}
      </div>
    );
  }
}

export default App;
