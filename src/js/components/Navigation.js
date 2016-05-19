import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

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
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <Link to="groups" onClick={this.toggleCollapse.bind(this)}>Groups</Link>
              </li>
              <li activeClassName="active">
                <Link to="notes" onClick={this.toggleCollapse.bind(this)}>Notes</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li activeClassName="active">
                <Link to="profile" onClick={this.toggleCollapse.bind(this)}>My Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
