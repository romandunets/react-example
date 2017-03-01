import React, { Component } from 'react';

import UserListItem from '../../components/users/UserListItem';
import * as UsersActions from '../../actions/UsersActions';
import UsersStore from '../../stores/UsersStore';

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

    const UserComponents = users.map((user) => {
      return <UserListItem key={user.id} {...user} />;
    });

    return (
      <table class="table">
        <tbody>{UserComponents}</tbody>
      </table>
    );
  }
}

export default UsersListPage;
