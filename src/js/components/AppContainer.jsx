/**
 * Contains the framework for the app; individual pages can be rendered
 * inside this.
 */

import React from 'react';
import {AppBar, Styles} from 'material-ui';
import {RouteHandler} from 'react-router';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  getInitialState() {
      return {};
  },

  componentDidMount() {
  },

  componentWillUnmount() {
  },

  childContextTypes: {
   muiTheme: React.PropTypes.object
 },

 getChildContext() {
   return {
     muiTheme: ThemeManager.getCurrentTheme()
   };
 },


  render() {
    return (
        <div className="main-page">
            <AppBar
                title="Cabra"
                />

            {/* The router puts the children of the current route here */}
            <RouteHandler/>

        </div>
    );
  }
});
