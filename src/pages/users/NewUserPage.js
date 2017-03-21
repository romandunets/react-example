import React, { Component } from 'react';

import UserForm from '../../components/users/UserForm';

class NewUserPage extends Component {
  render() {
    return (
      <UserForm user={ user } />
    );
  }
}

export default NewUserPage;
