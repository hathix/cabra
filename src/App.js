import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeView from './views/HomeView';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Provider, connect } from 'react-redux';

import {createStore, combineReducers, applyMiddleware } from 'redux';



let initialDecks = [ {
    name: "apple"
  }, {
    name: "banana"
  }];

const ACTION_TYPES = {
  ADD_DECK: 'ADD_DECK',
  NO_OP: 'NO_OP'
};

// action creators
const addDeck = (deck={name: ''}) => ({
    type: ACTION_TYPES.ADD_DECK,
    deck
});

let deckReducer = function(state=initialDecks, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_DECK:
      // TODO do all this with immutable.js tbh
      return [
        ...state,
        action.deck
      ];

    case ACTION_TYPES.NO_OP:
      return state;
  }

  // default: do nothing
  return state;
}

// React Router stuff
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// set up routers. add the reducer to store on 'router' key

let reducers = {
  decks: deckReducer,
  router: routerReducer
};

// Also apply our middleware for navigating
const store = createStore(
  combineReducers(reducers),
  // initialState,
  applyMiddleware(middleware)
);


let mapStateToProps = function(state) {
  return {
    decks: state.decks
  };
};

export { mapStateToProps };


store.dispatch(addDeck({
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
        </Provider>
        </div>
      </div>
    );
  }
};

// To programatically go to a certain URL
// store.dispatch(push('/about'));

export default App;
