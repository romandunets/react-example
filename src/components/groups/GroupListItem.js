import React, { Component } from 'react';

class GroupListItem extends Component {
  render() {
    const { name, description, notesCount } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td>{notesCount} notes</td>
      </tr>
    );
  }
}

export default GroupListItem;
