import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

const _notes = [];

const NoteStore = createStore({
  listNotes() {
    return _notes;
  }
});

NoteStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_NOTES_SUCCESS:
      merge(_notes, action.notes);
      NoteStore.emitChange();
      break;
  }
});

export default NoteStore;
