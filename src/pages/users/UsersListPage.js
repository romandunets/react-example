import React, { Component } from 'react';
import { Link } from 'react-router';

import * as UsersActions from '../../actions/UsersActions';
import UsersStore from '../../stores/UsersStore';
import UserList from '../../components/users/UserList';

class UsersListPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    UsersStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    UsersActions.listUsers();
  }

  componentWillUnmount() {
    UsersStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      users: UsersStore.listUsers()
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <Link to="users/new">New user</Link>
        <UserList users={ users } />
      </div>
    );
  }
}

export default UsersListPage;
