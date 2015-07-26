import React, {PropTypes} from 'react';
import DeckList from './DeckList.jsx';
import {AppBar, AppCanvas, RaisedButton} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    return (
          <div className="page-content">
              <DeckList />
          </div>
    );
  }
});
