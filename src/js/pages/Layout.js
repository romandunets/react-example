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
        </div>

        <Footer />
      </div>
    );
  }
}
