import React, { Component } from 'react';
import GroupListItem from './GroupListItem';

class GroupList extends Component {
  render() {
    const { groups } = this.props;

    const GroupListItems = groups.map((group) => {
      return <GroupListItem key={group.id} group={group} />;
    });

    return (
      <table class="table">
        <tbody>{ GroupListItems }</tbody>
      </table>
    );
  }
}

export default GroupList;
