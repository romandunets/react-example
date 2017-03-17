import React, { Component } from 'react';

class GroupDetails extends Component {
  render() {
    const { group } = this.props;

    return (
      <dl class="row">
        <dt class="col-sm-3">Name</dt>
        <dd class="col-sm-9">{ group.name }</dd>
        <dt class="col-sm-3">Notes</dt>
        <dd class="col-sm-9">{ group.notesCount }</dd>
        <dt class="col-sm-3">Description</dt>
        <dd class="col-sm-9">{ group.description }</dd>
      </dl>
    );
  }
}

export default GroupDetails;
