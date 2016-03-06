import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute, lazy } from 'react-project'

import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import loadBoard from 'bundle?lazy!./components/Board'
import hello from './api/hello'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="board" getComponent={lazy(loadBoard)}/>
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
