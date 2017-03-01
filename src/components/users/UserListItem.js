import React, { Component } from 'react';

class UserListItem extends Component {
  render() {
    const { username } = this.props;

    return (
      <tr>
        <td>{username}</td>
      </tr>
    );
  }
}

export default UserListItem;
