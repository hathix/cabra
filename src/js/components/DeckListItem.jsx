import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui';

export default React.createClass({
    propTypes: {
      name: PropTypes.string.isRequired
    },

    getDefaultProps() {
      return {
        name: "My First Deck"
      }
    },

  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    let {name} = this.props;
    return (
        <ListItem
          primaryText={name}
          />
    );
  }
});
