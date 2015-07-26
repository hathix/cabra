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
      let southeastStyle = {
        position: 'absolute',
        bottom: 20,
        right: 20
      };
    return (
          <div className="page-content">
              <DeckList />
              <FloatingActionButton style={southeastStyle}>
                  <FontIcon className="material-icons">add</FontIcon>
              </FloatingActionButton>
          </div>
    );
  }
});
