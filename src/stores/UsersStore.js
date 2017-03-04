import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

const _users = [];

const UserStore = createStore({
  listUsers() {
    return _users;
  }
});

UserStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_USERS_SUCCESS:
      merge(_users, action.data);
      UserStore.emitChange();
      break;
  }
});

export default UserStore;
