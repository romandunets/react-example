import React from "react";

import Note from "../components/Note";
import NotesStore from "../stores/NotesStore"

export default class Notes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      notes: NotesStore.getAll()
    };
  }

  componentWillMount() {
    NotesStore.on("change", () => {
      this.setState({
        notes: NotesStore.getAll()
      });
    });
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
