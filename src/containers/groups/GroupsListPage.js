import React, { Component } from 'react';

import GroupListItem from '../../components/groups/GroupListItem';
import * as GroupsActions from '../../actions/GroupsActions';
import GroupsStore from '../../stores/GroupsStore';

class GroupsListPage extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GroupsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    GroupsActions.listGroups();
  }

  componentWillUnmount() {
    GroupsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      groups: GroupsStore.listGroups()
    });
  }

  render() {
    const { groups } = this.state;

    const GroupComponents = groups.map((group) => {
      return <GroupListItem key={group.id} {...group} />;
    });

    return (
      <table class="table">
        <tbody>{GroupComponents}</tbody>
      </table>
    );
  }
}

export default GroupsListPage;
