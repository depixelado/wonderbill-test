import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom'
import store from './state/store'
import Add from './pages/Add/Add'
import Home from './pages/Home/Home'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  </Provider>
)
