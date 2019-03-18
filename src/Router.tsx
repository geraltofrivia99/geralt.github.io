import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <div>Loading...</div>,
  delay: 300 // 0.3 seconds
});

const AsyncAbout = Loadable({
  loader: () => import('./pages/About'),
  loading: () => <div>Loading...</div>,
  delay: 300 // 0.3 seconds
});

export default () => (
  <Switch>
    <Route exact path="/more" component={AsyncHome} />
    <Route exact path="/" component={AsyncAbout} />
  </Switch>
);
