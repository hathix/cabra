import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeView from './views/HomeView';

import { Provider, connect } from 'react-redux';
import { store, addDeck, mapStateToProps } from './store';


const { getState, dispatch } = store;
dispatch(addDeck({
  // a new deck
  name: "cherry"
}));

let HomeView2 = connect(mapStateToProps)(HomeView);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Provider store={store}>
              <HomeView2 />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
