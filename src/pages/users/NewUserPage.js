import React, { Component } from 'react';

import * as UsersActions from '../../actions/UsersActions';
import UserForm from '../../components/users/UserForm';

class NewUserPage extends Component {
  createUser(user) {
    UsersActions.createUser(user);
  }

  render() {
    return (
      <UserForm handleSubmit={ this.createUser } />
    );
  }
}

export default NewUserPage;
