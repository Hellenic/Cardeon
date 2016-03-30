require('styles/App.less');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import Game from './containers/Game';

const store = configureStore();

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
);
