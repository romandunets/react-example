import React from "react";

import Note from "../components/Note";

export default class Notes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      notes: [
        {
          id: 1,
          name: "English lesson 1",
          group: "Studies",
          updated_at: "23 minutes ago"
        },
        {
          id: 2,
          name: "Germany lesson 1",
          group: "Studies",
          updated_at: "2 days ago"
        },
        {
          id: 3,
          name: "Railroad modeling baseboard",
          group: "Hobby",
          updated_at: "about week ago"
        }
      ]
    }
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
