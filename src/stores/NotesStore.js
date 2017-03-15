import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';

let _notes = [];
let _note = {};

class NotesStore extends BaseStore {
  register (action) {
    switch(action.type) {
      case ActionTypes.LIST_NOTES_SUCCESS:
        _notes = action.data;
        this.emitChange();
        break;
      case ActionTypes.GET_USER_SUCCESS:
        _note = action.data;
        this.emitChange();
        break;
    }
  }

  listNotes() {
    return _notes;
  }

  getNote() {
    return _note;
  }
}

export default new NotesStore;
