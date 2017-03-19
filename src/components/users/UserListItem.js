import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class UserListItem extends Component {
  render() {
    const { user } = this.props;

    return (
      <tr onClick={ (e) => browserHistory.push(`users/${user.id}`) }>
        <td>{ user.username }</td>
      </tr>
    );
  }
}

export default UserListItem;
