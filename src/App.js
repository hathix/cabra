import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeView from './views/HomeView';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider, connect } from 'react-redux';
import { store, addDeck, mapStateToProps, history } from './store';


const { getState, dispatch } = store;
dispatch(addDeck({
  // a new deck
  name: "cherry"
}));

// wrap components with the connector so they can access state
let HomeView2 = connect(mapStateToProps)(HomeView);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">

        <Provider store={store}>
          { /* ConnectedRouter will use the store from Provider automatically */ }
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={HomeView2}/>
              <Route path="/about" component={HomeView2}/>
            </div>
          </ConnectedRouter>
        </Provider>,
        </div>
      </div>
    );
  }
};

// To programatically go to a certain URL
// store.dispatch(push('/about'));

export default App;
