import React, { Component } from 'react';

import * as UsersActions from '../../actions/UsersActions';
import UsersStore from '../../stores/UsersStore';
import UserCard from '../../components/users/UserCard';

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    UsersStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    UsersActions.getUser(1); // TODO: id should be fetched from auth store
  }

  componentWillUnmount() {
    UsersStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      user: UsersStore.getUser()
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>My Profile</h1>
        <UserCard user={ user } />
      </div>
    );
  }
}


export default ProfilePage;