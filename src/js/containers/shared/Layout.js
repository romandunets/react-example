import React, { Component } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

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
