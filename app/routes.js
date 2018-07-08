import * as React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import HomePage from './containers/Home'
import CounterPage from './containers/CounterPage'

export default () => (
  <App>
    <Switch>
      <Route exact={true} path="/counter" component={CounterPage} />
      <Route exact={true} path="/" component={HomePage} />
    </Switch>
  </App>
)
