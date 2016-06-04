import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import HomePage from '../home/HomePage';
import ProfilePage from '../users/ProfilePage';
import GroupsListPage from '../groups/GroupsListPage';
import NotesListPage from '../notes/NotesListPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route path="groups" component={GroupsListPage}></Route>
          <Route path="notes" component={NotesListPage}></Route>
          <Route path="profile" component={ProfilePage}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
