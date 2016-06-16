import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _notes = [];

function setNotes(notes) {
  _notes = notes;
}

class NoteStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  listNotes() {
    return _notes;
  }
}

const notesStore = new NoteStore();

notesStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_NOTES_SUCCESS:
      setNotes(action.notes);
      notesStore.emitChange();
      break;
    default:
  }
});

export default notesStore;
