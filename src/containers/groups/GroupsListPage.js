/*import React, { Component } from 'react';

class GroupsListPage extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <tbody>
            <tr>
              <td>Studies</td>
              <td>This is group about studies</td>
              <td>23 notes</td>
            </tr>
            <tr>
              <td>Work</td>
              <td>This is group about work</td>
              <td>12 notes</td>
            </tr>
            <tr>
              <td>Hobby</td>
              <td>This is group about hobby</td>
              <td>1 note</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroupsListPage;*/



import React, { Component } from 'react';

import Group from '../../components/groups/Group';
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
    NotesActions.listNotes();
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
      return <Group key={group.id} {...group} />;
    });

    return (
      <table class="table">
        <tbody>{GroupComponents}</tbody>
      </table>
    );
  }
}

export default GroupsListPage;
