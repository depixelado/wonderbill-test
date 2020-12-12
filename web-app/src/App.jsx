import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import store from './state/store'
import Add from './pages/Add/Add'

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

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/add">Add a bill</Link>
  </div>
)
