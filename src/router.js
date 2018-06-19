import React, { Component } from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';

import Vote from './containers/Vote';
import Score from './containers/Score';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/vote" component={Vote}/>
          <Route path="/score" component={Score}/>
          <Redirect exact to="/vote" />
        </Switch>
      </BrowserRouter>
    );
  }
}
