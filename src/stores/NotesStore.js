import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

let _notes = [];
let _note = {};

const NoteStore = createStore({
  listNotes() {
    return _notes;
  },
  getNote() {
    return _note;
  }
});

NoteStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case ActionTypes.LIST_NOTES_SUCCESS:
      merge(_notes, action.data);
      NoteStore.emitChange();
      break;
    case ActionTypes.GET_NOTE_SUCCESS:
      _note = action.data;
      NoteStore.emitChange();
      break;
  }
});

export default NoteStore;
