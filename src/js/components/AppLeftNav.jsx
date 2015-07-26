import React from 'react';
import {LeftNav, MenuItem} from 'material-ui';

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
    {
       type: MenuItem.Types.LINK,
       payload: 'https://github.com/callemall/material-ui',
       text: 'GitHub'
   },
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
