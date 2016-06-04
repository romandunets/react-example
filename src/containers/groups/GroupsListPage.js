import React, { Component } from 'react';

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

export default GroupsListPage;
