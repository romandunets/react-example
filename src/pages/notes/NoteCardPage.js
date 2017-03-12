import React, { Component } from 'react';

import * as NotesActions from '../../actions/NotesActions';
import NotesStore from '../../stores/NotesStore';
import NoteDetails from '../../components/notes/NoteDetails';

class NoteDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      note: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    NotesStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    NotesActions.getNote(this.props.params.id);
  }

  componentWillUnmount() {
    NotesStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      note: NotesStore.getNote()
    });
  }

  render() {
    const { note } = this.state;

    return (
      <NoteDetails note={ note } />
    );
  }
}

export default NoteDetailsPage;
