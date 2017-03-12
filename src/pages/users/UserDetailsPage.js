import React, { Component } from 'react';

import * as UsersActions from '../../actions/UsersActions';
import UsersStore from '../../stores/UsersStore';
import UserDetails from '../../components/users/UserDetails';

class UserDetailsPage extends Component {
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
      <UserDetails user={ user } />
    );
  }
}

export default UserDetailsPage;
