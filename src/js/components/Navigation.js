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
    const { location } = this.props;
    const { collapsed } = this.state;
    const groupsClass = location.pathname.match(/^\/groups/) ? "active" : "";
    const notesClass = location.pathname.match(/^\/notes/) ? "active" : "";
    const profileClass = location.pathname.match(/^\/profile/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} onlyActiveOnIndex={true}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">KnookApp</a>
          </div>

          <div id="navbar" class={ "navbar-collapse " + navClass }>
            <ul class="nav navbar-nav">
              <li class={groupsClass}>
                <Link to="groups" onClick={this.toggleCollapse.bind(this)}>Groups</Link>
              </li>
              <li class={notesClass}>
                <Link to="notes" onClick={this.toggleCollapse.bind(this)}>Notes</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class={profileClass}>
                <Link to="profile" onClick={this.toggleCollapse.bind(this)}>My Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
