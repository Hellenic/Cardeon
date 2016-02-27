require('../semantic/dist/semantic.min.css');
require('styles/App.less');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App, About, NoMatch } from './pages';
import { Cards, CreateCard, CardTemplates, CreateTemplate } from './pages';

// Render the main component into the dom
ReactDOM.render((
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
