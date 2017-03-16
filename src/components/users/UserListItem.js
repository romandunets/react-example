import React, { Component } from 'react';
import { Link } from 'react-router';

class UserListItem extends Component {
  render() {
    const { ...user } = this.props;

    return (
      <tr>
        <td><Link to={`/users/${user.id}`}>{ user.username }</Link></td>
      </tr>
    );
  }
}

export default UserListItem;
