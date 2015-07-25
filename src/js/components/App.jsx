import React, {PropTypes} from 'react';
import DeckList from './DeckList.jsx';
import {AppBar, AppCanvas, RaisedButton, Styles} from 'material-ui';

const ThemeManager = new Styles.ThemeManager();

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

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
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div className="main-page">
          <AppBar
              title="Cabra"
              />

          <div className="page-content">
              <DeckList />
          </div>

      </div>
    );
  }
});
