import React, { Component } from 'react';

class GroupListItem extends Component {
  render() {
    const { ...group } = this.props;

    return (
      <tr>
        <td>{ group.name }</td>
        <td>{ group.description }</td>
        <td>{ group.notesCount } notes</td>
      </tr>
    );
  }
}

export default GroupListItem;
