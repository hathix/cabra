import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui';
import {Link, Navigation} from 'react-router';

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

  handleClick(e){
      e.preventDefault();
      this.transitionTo("/deck/5");
  },

  render() {
    let {name} = this.props;
    return (
        <ListItem
          primaryText={name}
          containerElement={<Link to="/deck/5" />}
          />
    );
  }
});
