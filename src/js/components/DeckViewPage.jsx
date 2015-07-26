import React, {PropTypes} from 'react';
import DeckList from './DeckList.jsx';
import {AppBar, AppCanvas, RaisedButton, FloatingActionButton, FontIcon}
    from 'material-ui';

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
              <FloatingActionButton>
                  <FontIcon className="material-icons">add</FontIcon>
              </FloatingActionButton>
          </div>
    );
  }
});
