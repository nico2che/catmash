import React from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';

import Vote from './containers/Vote';
import Score from './containers/Score';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/vote" component={Vote} />
        <Route path="/score" component={Score} />
        <Redirect exact to="/vote" />
      </Switch>
    </BrowserRouter>
  );
}
