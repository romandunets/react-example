import React, { Component } from 'react';

import * as NotesActions from '../../actions/NotesActions';
import NotesStore from '../../stores/NotesStore';
import NoteList from '../../components/notes/NoteList';

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
      notes: NotesStore.listNotes()
    });
  }

  render() {
    const { notes } = this.state;

    return (
      <NoteList notes={ notes } />
    );
  }
}

export default NotesListPage;
