import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './containers/Layout';
import Home from './containers/Home';
import Groups from './containers/Groups';
import Notes from './containers/Notes';
import Profile from './containers/Profile';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="groups" component={Groups}></Route>
          <Route path="notes" component={Notes}></Route>
          <Route path="profile" component={Profile}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
