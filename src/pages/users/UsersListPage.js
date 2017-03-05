import React, { Component } from 'react';

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
      <UserList users={ users } />
    );
  }
}

export default UsersListPage;
