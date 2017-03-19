import React, { Component } from 'react';
import NoteListItem from './NoteListItem';

class NoteList extends Component {
  render() {
    const { notes } = this.props;

    const NoteListItems = notes.map((note) => {
      return <NoteListItem key={ note.id } note={note} />;
    });

    return (
      <table class="table">
        <tbody>{ NoteListItems }</tbody>
      </table>
    );
  }
}

export default NoteList;
