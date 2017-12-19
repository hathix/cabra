import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider, connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

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

export { addDeck };
export { store };
export { history };

let mapStateToProps = function(state) {
  return {
    decks: state.decks
  };
};

export { mapStateToProps };
