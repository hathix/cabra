import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Deck from '../models/Deck';

class HomeView extends Component {

  addDeck() {
     this.props.addDeck("TEST")
  }

  render() {
    const deckNameList = this.props.decks.map(deck => {
      let deckURL = "/deck/" + deck.id

      return (<p key={ deck.id }>
        <Link to={deckURL}>
          { deck.name }
        </Link>
      </p>)
    })

    // deck ID, passed in from URL, is here
    let desiredDeckID = 0
    if (this.props.match) {
       desiredDeckID = this.props.match.params.id
    }

    return (
        <div>
          Hello world!!! { desiredDeckID }

          <Button bsStyle="primary" onClick={this.addDeck.bind(this)}>
            Add Deck
          </Button>

          <div>
            { deckNameList }
          </div>
        </div>
    );
  }
}

export default HomeView;
