import React from 'react';
import {LeftNav} from 'material-ui';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  toggle() {
    this.refs.leftNav.toggle();
  },

  menuItems: [
    { route: '/deck/5', text: 'Deck' },
  ],

  render() {
      let menuItems = this.menuItems;
    return (
      <LeftNav
          ref="leftNav"
          menuItems={menuItems}
          docked={false}
          />
    );
  }
});
