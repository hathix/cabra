import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import Deck from '../models/Deck';

class HomeView extends Component {

  static contextTypes: {
    store: PropTypes.object
  }

  render() {
    let { decks } = this.props;

    return (
        <div>
          Hello world!!!

          <Button bsStyle="primary">
            Sup
          </Button>
        </div>
    );
  }
}

export default HomeView;
