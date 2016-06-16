import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _groups = [];

function setGroups(groups) {
  _groups = groups;
}

class GroupsStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  listGroups() {
    return _groups;
  }
}

const groupsStore = new GroupsStore();

groupsStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_GROUPS_SUCCESS:
      setNotes(action.groups);
      groupsStore.emitChange();
      break;
    default:
  }
});

export default groupsStore;
