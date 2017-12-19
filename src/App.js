import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {Provider, connect} from 'react-redux'
import {Route} from 'react-router'
import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import React, {Component} from 'react'
import persistState, {mergePersistedState, transformState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';

// import logo from './logo.svg'
import './App.css'
import HomeView from './views/HomeView'

// Demo decks
// let initialDecks = [ {
//     name: "apple"
//   }, {
//     name: "banana"
//   }];

// redux actions
// TODO factor out actions
let ACTION_TYPES = {
  ADD_DECK: 'ADD_DECK'
}

let actions = {
  addDeck: (name='') => ({
    type: ACTION_TYPES.ADD_DECK,
    name: name
  })
}

// utils to generate an id
// left pads a string
let pad = (number, width=3, padder=0) => (
  String(padder).repeat(width) + String(number)).slice(String(number).length
)

// e.g. generateID(5) makes random 'zip codes'
let generateID = length => (
  pad(Math.floor(Math.random() * Math.pow(10, length)), length)
)

// TODO factor out reducers
// handles all deck-related actions
let deckReducer = function(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_DECK:
      // TODO do all this with immutable.js tbh
      // action.name is the new deck name

      let newDeck = {
        // randomly generate an id
        id: generateID(10),
        name: action.name,
        cards: []
      }

      return [
        ...state,
        newDeck
      ]
    default:
      // do nothing
      return [...state]
  }
}

// React Router stuff
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// set up routers. add the reducer to store on 'router' key
let reducers = {
  decks: deckReducer,
  router: routerReducer
}

let masterReducer = combineReducers(reducers)

let finalReducer = compose(
  mergePersistedState()
)(masterReducer)

const storage = compose(
  transformState([
    // transform down (before persisting)
    function(data){
      // `data` is the store
      // ignore the router
      if (data.router) {
        delete data.router
      }

      return data
    }
  ],[
    // transform up (after storing, before rehydrating)
  ])
)(adapter(window.localStorage))

const enhancer = compose(
  applyMiddleware(middleware),
  persistState(storage, "cabra")
)

// Also apply our middleware for navigating
const store = createStore(
  finalReducer,
  enhancer
)

// for decks
let mapStateToProps = (state) => {
  return {decks: state.decks}
}

let mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (name) => {
      dispatch(actions.addDeck(name))
    }
  }
}

// for testing, add a new deck
// store.dispatch(actions.addDeck("cherry"))


// wrap components with the connector so they can access state
let HomeView2 = connect(mapStateToProps, mapDispatchToProps)(HomeView)

class App extends Component {
  render() {
    return (<div className="App">
      <div className="container">

        <Provider store={store}>
          {/* ConnectedRouter will use the store from Provider automatically */}
          <ConnectedRouter history={history}>
            <div>
              <Route exact={true} path="/" component={HomeView2}/>
              <Route path="/deck/:id" component={HomeView2}/>
            </div>
          </ConnectedRouter>
        </Provider>
      </div>
    </div>)
  }
}

// To programatically go to a certain URL
// store.dispatch(push('/about'));

export default App
