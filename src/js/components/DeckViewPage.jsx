import React, {PropTypes} from 'react';
import DeckList from './DeckList.jsx';
import {AppBar, AppCanvas, RaisedButton, Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    }
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
          <div className="page-content">
              <DeckList />
          </div>
    );
  }
});
