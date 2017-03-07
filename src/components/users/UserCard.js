import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { user } = this.props;

    return (
      <dl>
        <dt>Username</dt>
        <dd>{ user.username }</dd>
        <dt>First name</dt>
        <dd>{ user.firstName }</dd>
        <dt>Last name</dt>
        <dd>{ user.lastName }</dd>
        <dt>Role</dt>
        <dd>{ user.role }</dd>
      </dl>
    );
  }
}

export default UserCard;
