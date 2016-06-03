import React, { Component } from 'react';

import Note from '../components/Note';
import * as NotesActions from '../actions/NotesActions';
import NotesStore from '../stores/NotesStore';

class NotesListPage extends Component {
  constructor() {
    super();
    this.getNotes = this.getNotes.bind(this);
    this.state = {
      notes: NotesStore.getAll()
    };
  }

  componentWillMount() {
    NotesStore.on("change", this.getNotes);
  }

  componentWillUnmount() {
    NotesStore.removeListener("change", this.getNotes);
  }

  getNotes() {
    this.setState({
      notes: NotesStore.getAll(),
    });
  }

  reloadNotes() {
    NotesActions.reloadNotes();
  }

  render() {
    const { notes } = this.state;

    const NoteComponents = notes.map((note) => {
      return <Note key={note.id} {...note} />;
    });

    return (
      <div>
        <button onClick={this.reloadNotes.bind(this)}>Reload!</button>
        <table class="table">
          <tbody>{NoteComponents}</tbody>
        </table>
      </div>
    );
  }
}

export default NotesListPage;
