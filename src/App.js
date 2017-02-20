import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/shared/Layout';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/users/ProfilePage';
import GroupsListPage from './pages/groups/GroupsListPage';
import NotesListPage from './pages/notes/NotesListPage';

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
