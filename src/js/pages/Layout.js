import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to KnookApp</h1>
        <p class="lead">This is a basic notes application intended to demonstrate how to use ReactJS</p>
        {this.props.children}
        <Link to="groups">Groups</Link>
        <Link to="notes">Notes</Link>
      </div>
    );
  }
}
