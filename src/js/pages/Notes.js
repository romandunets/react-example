import React from "react";

export default class Notes extends React.Component {
  render() {
    return (
      <div>
        <table class="table">
          <tbody>
            <tr>
              <td>English lesson 1</td>
              <td>Studies</td>
              <td>23 minutes ago</td>
            </tr>
            <tr>
              <td>English lesson 2</td>
              <td>Studies</td>
              <td>2 days ago</td>
            </tr>
            <tr>
              <td>Railroad modeling</td>
              <td>Hobby</td>
              <td>about week ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
