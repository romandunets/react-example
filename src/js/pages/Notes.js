import React from "react";

import Note from "../components/Note";
import NoteStore from "../stores/NoteStore"

export default class Notes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      notes: todoStore.getAll();
    };
  }

  render() {
    const { notes } = this.state;

    const NoteComponents = notes.map((note) => {
      return <Note key={note.id} {...note} />;
    });

    return (
      <div>
        <table class="table">
          <tbody>{NoteComponents}</tbody>
        </table>
      </div>
    );
  }
}
