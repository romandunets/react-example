import React, { Component } from 'react';

import * as GroupsActions from '../../actions/GroupsActions';
import GroupsStore from '../../stores/GroupsStore';
import GroupList from '../../components/groups/GroupList';

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

    return (
      <GroupList groups={ groups } />
    );
  }
}

export default GroupsListPage;
