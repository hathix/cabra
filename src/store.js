import {createStore, combineReducers } from 'redux';
import {Provider, connect} from 'react-redux';

let initialState = {
  decks: [ {
    name: "apple"
  }, {
    name: "banana"
  }]
};

const ACTION_TYPES = {
  ADD_DECK: 'ADD_DECK',
  NO_OP: 'NO_OP'
};

// action creators
const addDeck = (deck={name: ''}) => ({
    type: ACTION_TYPES.ADD_DECK,
    deck
});

let reducer = function(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case ACTION_TYPES.ADD_DECK:
      // TODO do all this with immutable.js tbh
      return {
        ...state,
        decks: [
          ...state.decks,
          action.deck
        ]
      };

    case ACTION_TYPES.NO_OP:
      return state;
  }

  // default: do nothing
  return state;
}

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer,
  initialState
);

export { addDeck };
export { store };

let mapStateToProps = function(state) {
  return {
    decks: state.decks
  };
};

export { mapStateToProps };
