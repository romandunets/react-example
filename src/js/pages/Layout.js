import React from "react";
import { Link } from "react-router";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <div>
          <h1>Welcome to KnookApp</h1>
          <p class="lead">This is a basic notes application intended to demonstrate how to use ReactJS</p>
          {this.props.children}
          <Link to="groups">My Groups</Link>
          <Link to="notes">My Notes</Link>
          <Link to="profile">My Profile</Link>
        </div>

        <Footer />
      </div>
    );
  }
}
