import React from "react";
import { Link } from "react-router";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Navigation location={location} />

        <div id="content" class="container text-center">
          {this.props.children}
        </div>

        <Footer/>
      </div>
    );
  }
}
