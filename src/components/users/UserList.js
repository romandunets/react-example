import React, { Component } from 'react';
import UserListItem from './UserListItem';

class UserList extends Component {
  render() {
    const { users } = this.props;

    const UserListItems = users.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });

    return (
      <table class="table">
        <tbody>{ UserListItems }</tbody>
      </table>
    );
  }
}

export default UserList;
