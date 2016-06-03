import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import HomePage from '../home/HomePage';
import ProfilePage from '../users/ProfilePage';
import GroupsListPage from '../groups/GroupsListPage';
import NoteListPage from '../notes/NoteListPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
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
