import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import Deck from '../models/Deck';

class HomeView extends Component {

  static contextTypes: {
    store: PropTypes.object
  }

  render() {
    console.log(this.props);

    const deckNameList = this.props.decks.map(deck =>
      <p key={ deck.name }>
        { deck.name }
      </p>
    );

    return (
        <div>
          Hello world!!!

          <Button bsStyle="primary">
            Sup
          </Button>

          <div>
            { deckNameList }
          </div>
        </div>
    );
  }
}

export default HomeView;
