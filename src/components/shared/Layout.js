import React, { PropTypes, Component } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object
  };

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

export default Layout;
