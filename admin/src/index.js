require('styles/App.less');

import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './stores';
// import App from './containers/App';
// const store = configureStore();
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, About, NoMatch } from './pages';
import { Cards, CreateCard, CardTemplates, CreateTemplate } from './pages';

// Render the main component into the dom
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Cards} />
      <Route path="createcard" component={CreateCard} />
      <Route path="cardtemplates" component={CardTemplates} />
      <Route path="createtemplate" component={CreateTemplate} />
      <Route path="about" component={About} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'));

/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
*/
