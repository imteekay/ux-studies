import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Search } from './containers/Search';
import { Menu } from './components/Menu';
import { MenuItem } from './types/MenuItem';

const menuItems: MenuItem[] = [
  {
    linkTo: '/',
    label: 'Home',
    key: 'link-to-home',
  },
  {
    linkTo: '/search',
    label: 'Search',
    key: 'link-to-search',
  },
];

export const App = () => (
  <Router>
    <Menu menuItems={menuItems} />
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <h1>It's Home</h1>
      </Route>
    </Switch>
  </Router>
);
