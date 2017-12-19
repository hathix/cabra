import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeView from './views/HomeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <HomeView />
        </div>
      </div>
    );
  }
}

export default App;
