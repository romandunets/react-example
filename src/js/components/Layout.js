import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.title = "Welcome";
  }

  render() {
    return (
      <h1>{this.title}</h1>
    );
  }
}
