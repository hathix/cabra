import React from 'react';
import AppContainer from './components/AppContainer.jsx';
import DeckViewPage from './components/DeckViewPage.jsx';
import DeckInfoPage from './components/DeckInfoPage.jsx';
let Router = require('react-router');
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

// React.render(<AppContainer />, document.getElementById('main'));

// Router
// TODO refactor into own module
// this is for react router 0.13.3, not 1.0.0-beta3
// React.render((
//   <Router history={history}>
//     <Route path="/" component={AppContainer}>
//       {/* <Route path="about" component={About}/> */}
//
//       <Route path="/deck/:deckId" component={DeckInfoPage} />
//
//       {/* Default path */}
//       <Route path="*" component={DeckViewPage}/>
//     </Route>
//   </Router>
// ), document.body);

var routes = (
  <Route handler={AppContainer}>
      <DefaultRoute handler={DeckViewPage} />
      <Route path="deck/:id" handler={DeckInfoPage} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
