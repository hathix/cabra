import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

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

let store = createStore(reducer, initialState);

export { addDeck };
export { store };

let mapStateToProps = function(state) {
  return {
    decks: state.decks
  };
};

export { mapStateToProps };


// var CommentBoxState = function(state) {
//   return {
//     data: state.data,
//     url: state.url,
//     pollInterval: state.pollInterval
//   }
// }
//
// var CommentListState = function(state) {
//   return {
//     data: state.data
//   }
// }
//
// var CommentBoxDispatch = function(dispatch) {
//   return {
//     addComment: function(comment) {
//       comment.id = Date.now();
//       dispatch({
//         type: 'add_comment',
//         comment: comment,
//       })
//     },
//     setComments: function(data) {
//       dispatch({
//         type: 'set_comments',
//         data: data
//       })
//     }
//   }
// }
//
// CommentBox = connect(
//   CommentBoxState,
//   CommentBoxDispatch
// )(CommentBox)
// CommentList = connect(
//   CommentListState
// )(CommentList)
//
// ReactDOM.render(
//   <Provider store={store}>
//     <CommentBox />
//   </Provider>,
//   document.getElementById('content')
// );
