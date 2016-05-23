import React from "react";

export default class Note extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, group, updated_at } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{group}</td>
        <td>{updated_at}</td>
      </tr>
    );
  }
}
