import React, { Component } from 'react';

import Note from '../../components/notes/Note';
import * as NotesActions from '../../actions/NotesActions';
import NotesStore from '../../stores/NotesStore';

class NotesListPage extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    NotesStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    NotesActions.listNotes();
  }

  componentWillUnmount() {
    NotesStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      notes: NotesStore.getNotes()
    });
  }

  render() {
    const { notes } = this.state;

    const NoteComponents = notes.map((note) => {
      return <Note key={note.id} {...note} />;
    });

    return (
      <table class="table">
        <tbody>{NoteComponents}</tbody>
      </table>
    );
  }
}

export default NotesListPage;
