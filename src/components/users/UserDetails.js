import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    const { user } = this.props;

    return (
      <dl class="row">
        <dt class="col-sm-3">Username</dt>
        <dd class="col-sm-9">{ user.username }</dd>
        <dt class="col-sm-3">First name</dt>
        <dd class="col-sm-9">{ user.firstName }</dd>
        <dt class="col-sm-3">Last name</dt>
        <dd class="col-sm-9">{ user.lastName }</dd>
        <dt class="col-sm-3">Role</dt>
        <dd class="col-sm-9">{ user.role }</dd>
      </dl>
    );
  }
}

export default UserDetails;
