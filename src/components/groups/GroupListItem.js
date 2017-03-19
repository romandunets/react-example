import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class GroupListItem extends Component {
  render() {
    const { group } = this.props;

    return (
      <tr onClick={ (e) => browserHistory.push(`groups/${group.id}`) }>
        <td>{ group.name }</td>
        <td>{ group.description }</td>
        <td>{ group.notesCount } notes</td>
      </tr>
    );
  }
}

export default GroupListItem;
