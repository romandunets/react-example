import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

const _groups = [];

const GroupStore = createStore({
  listGroups() {
    return _groups;
  }
});

GroupStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_GROUPS_SUCCESS:
      merge(_groups, action.data);
      GroupStore.emitChange();
      break;
  }
});

export default GroupStore;
