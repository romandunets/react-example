import React, { PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './components/shared/Layout';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/users/ProfilePage';
import UsersListPage from './pages/users/UsersListPage';
import UserDetailsPage from './pages/users/UserDetailsPage';
import NewUserPage from './pages/users/NewUserPage';
import GroupsListPage from './pages/groups/GroupsListPage';
import GroupDetailsPage from './pages/groups/GroupDetailsPage';
import NotesListPage from './pages/notes/NotesListPage';
import NoteDetailsPage from './pages/notes/NoteDetailsPage';

class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route path="users">
            <IndexRoute component={UsersListPage}></IndexRoute>
            <Route path="new" component={NewUserPage}></Route>
            <Route path=":id" component={UserDetailsPage}></Route>
          </Route>
          <Route path="groups">
            <IndexRoute component={GroupsListPage}></IndexRoute>
            <Route path=":id" component={GroupDetailsPage}></Route>
          </Route>
          <Route path="notes">
            <IndexRoute component={NotesListPage}></IndexRoute>
            <Route path=":id" component={NoteDetailsPage}></Route>
          </Route>
          <Route path="profile" component={ProfilePage}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;
