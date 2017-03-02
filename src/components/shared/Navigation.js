import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
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
    const usersClass = location.pathname.match(/^\/users/) ? "active" : "";
    const groupsClass = location.pathname.match(/^\/groups/) ? "active" : "";
    const notesClass = location.pathname.match(/^\/notes/) ? "active" : "";
    const profileClass = location.pathname.match(/^\/profile/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">KnookApp</Link>
          </div>

          <div id="navbar" class={ "navbar-collapse " + navClass }>
            <ul class="nav navbar-nav">
              <li class={usersClass}>
                <Link to="users" onClick={this.toggleCollapse.bind(this)}>Users</Link>
              </li>
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

export default Navigation;
