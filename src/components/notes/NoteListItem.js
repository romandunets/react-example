import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NoteListItem extends Component {
  render() {
    const { note } = this.props;

    return (
      <tr onClick={ (e) => browserHistory.push(`notes/${note.id}`) }>
        <td>{ note.name }</td>
        <td>{ note.group }</td>
        <td>{ note.updatedAt }</td>
      </tr>
    );
  }
}

export default NoteListItem;
