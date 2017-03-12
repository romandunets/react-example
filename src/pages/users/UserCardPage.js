import React, { Component } from 'react';

import * as UsersActions from '../../actions/UsersActions';
import UsersStore from '../../stores/UsersStore';
import UserCard from '../../components/users/UserCard';

class UserCardPage extends Component {
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
    UsersActions.getUser(this.props.params.id);
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
      <UserCard user={ user } />
    );
  }
}

export default UserCardPage;
