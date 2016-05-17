import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">KnookApp</a>
          </div>

          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li>
                <Link to="groups">Groups</Link>
              </li>
              <li>
                <Link to="notes">Notes</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="profile">My Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
