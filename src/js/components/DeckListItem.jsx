import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui';
let Router = require('react-router');
let Link = Router.Link;

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
        <Link to="/deck/5" key={name}>
            <ListItem
              primaryText={name}
              />
        </Link>
    );
  }
});
