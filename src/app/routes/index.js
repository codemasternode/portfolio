import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { HomePage } from './pages'

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './pages/HomePage'),
  loading: () => null,
  modules: ['homepage']
});



export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);
