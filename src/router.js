import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';

import Vote from './containers/Vote';
import Score from './containers/Score';
import NotFound from './containers/not-found';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect path="/" exact to="/vote" />
          <Route path="/vote" component={Vote}/>
          <Route path="/score" component={Score}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
