import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/search">
        <h1>It's Search</h1>
      </Route>
      <Route path="/">
        <h1>It's Home</h1>
      </Route>
    </Switch>
  </Router>
);
