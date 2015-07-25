import React from 'react';
import DeckListItem from './DeckListItem.jsx';
import {List} from 'material-ui';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
        <List>
            <DeckListItem name="Hey" />
            <DeckListItem name="Hey2" />
            <DeckListItem name="Hey3" />
        </List>
    );
  }
});
