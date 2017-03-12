import React, { Component } from 'react';
import { Link } from 'react-router';

class NoteListItem extends Component {
  render() {
    const { id, name, group, updatedAt } = this.props;

    return (
      <tr>
        <td><Link to={`/notes/${id}`}>{ name }</Link></td>
        <td>{group}</td>
        <td>{updatedAt}</td>
      </tr>
    );
  }
}

export default NoteListItem;
