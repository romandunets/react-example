import React from "react";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <h1>KnookApp</h1>
      </div>
    );
  }
}
