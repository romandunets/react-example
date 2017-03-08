import React, { Component } from 'react';
import { Link } from 'react-router';

class UserListItem extends Component {
  render() {
    const { id, username } = this.props;

    return (
      <tr>
        <td><Link to={`/users/${id}`}>{ username }</Link></td>
      </tr>
    );
  }
}

export default UserListItem;
