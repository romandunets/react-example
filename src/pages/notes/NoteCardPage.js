import React, { Component } from 'react';

import * as NotesActions from '../../actions/NotesActions';
import NotesStore from '../../stores/NotesStore';
import NoteCard from '../../components/notes/NoteCard';

class NoteDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      note: {}
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    NotesActions.addChangeListener(this.onChange);
  }

  componentDidMount() {
    NotesActions.getNote(this.props.params.id);
  }

  componentWillUnmount() {
    NotesActions.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      user: NotesActions.getNote()
    });
  }

  render() {
    const { note } = this.state;

    return (
      <UserDetails note={ note } />
    );
  }
}

export default NoteDetailsPage;
