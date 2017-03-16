import React, { Component } from 'react';
import { Link } from 'react-router';

class NoteListItem extends Component {
  render() {
    const { ...note } = this.props;

    return (
      <tr>
        <td><Link to={`/notes/${note.id}`}>{ note.name }</Link></td>
        <td>{ note.group }</td>
        <td>{ note.updatedAt }</td>
      </tr>
    );
  }
}

export default NoteListItem;
