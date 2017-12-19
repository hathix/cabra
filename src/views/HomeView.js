import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Deck from '../models/Deck';

class HomeView extends Component {

  addDeck() {
     this.props.addDeck(Math.random())
  }

  render() {
    const deckNameList = this.props.decks.map(deck =>
      <p key={ deck.name }>
        { deck.name }
      </p>
    );

    return (
        <div>
          Hello world!!!

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
