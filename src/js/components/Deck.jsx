import React, {PropTypes} from 'react';

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
      <p>{name}</p>
    );
  }
});
