/**
 * Contains the framework for the app; individual pages can be rendered
 * inside this.
 */

import React from 'react';
import AppLeftNav from './AppLeftNav.jsx';
import {AppBar, FlatButton, Styles} from 'material-ui';
import {RouteHandler, Navigation} from 'react-router';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
    mixins: [Navigation],

  getInitialState() {
      return {};
  },

  componentDidMount() {

  },

  componentWillUnmount() {
  },

  // handleBackClick(e) {
  //     e.preventDefault();
  //     history.go(-1);
  // },

  childContextTypes: {
   muiTheme: React.PropTypes.object
 },

 getChildContext() {
   return {
     muiTheme: ThemeManager.getCurrentTheme()
   };
 },

   _onLeftIconButtonTouchTap() {
     this.refs.leftNav.toggle();
 },

  render() {
    return (
        <div className="main-page">
            <AppBar
                title="Cabra"
                onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                //iconElementRight={<FlatButton label="Back" />}
                // onRightIconButtonTouchTap={this.handleBackClick}
                />

            <AppLeftNav ref="leftNav" />

            {/* The router puts the children of the current route here */}
            <RouteHandler/>

        </div>
    );
  }
});
