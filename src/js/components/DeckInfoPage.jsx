import React from 'react';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
      this.setState({
          //user: findUserById(this.props.params.userId)
      });
  },

  render() {
    return (
      <p>Hello, world!</p>
    );
  }
});
