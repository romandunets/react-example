import React, { Component } from 'react';

class NoteListItem extends Component {
  render() {
    const { name, group, updatedAt } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{group}</td>
        <td>{updatedAt}</td>
      </tr>
    );
  }
}

export default NoteListItem;
