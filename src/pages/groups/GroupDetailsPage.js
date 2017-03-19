import React, { Component } from 'react';

import * as GroupsActions from '../../actions/GroupsActions';
import GroupsStore from '../../stores/GroupsStore';
import GroupDetails from '../../components/groups/GroupDetails';

class GroupDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      group: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GroupsStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    GroupsActions.getGroup(this.props.params.id);
  }

  componentWillUnmount() {
    GroupsStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      group: GroupsStore.getGroup()
    });
  }

  render() {
    const { group } = this.state;

    return (
      <GroupDetails group={ group } />
    );
  }
}

export default GroupDetailsPage;
