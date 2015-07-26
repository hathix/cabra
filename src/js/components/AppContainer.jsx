/**
 * Contains the framework for the app; individual pages can be rendered
 * inside this.
 */

import React from 'react';
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

  handleBackClick(e) {
      alert(3);
      e.preventDefault();
      history.go(-1);
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
                iconElementRight={<FlatButton label="Back" />}
                onRightIconButtonTouchTap={this.handleBackClick}
                />

            {/* The router puts the children of the current route here */}
            <RouteHandler/>

        </div>
    );
  }
});
