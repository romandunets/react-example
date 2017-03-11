import React, { Component } from 'react';

class NoteDetails extends Component {
  render() {
    const { note } = this.props;

    return (
      <dl class="row">
        <dt class="col-sm-3">Name</dt>
        <dd class="col-sm-9">{ note.name }</dd>
        <dt class="col-sm-3">Group</dt>
        <dd class="col-sm-9">{ note.group }</dd>
        <dt class="col-sm-3">Updated at</dt>
        <dd class="col-sm-9">{ user.updatedAt }</dd>
      </dl>
    );
  }
}

export default NoteDetails;
