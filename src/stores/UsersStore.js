import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

let _users = [];
let _user = {};

const UserStore = createStore({
  listUsers() {
    return _users;
  },
  getUser() {
    return _user;
  }
});

UserStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.LIST_USERS_SUCCESS:
      _users = action.data;
      UserStore.emitChange();
      break;
    case ActionTypes.GET_USER_SUCCESS:
      _user = action.data;
      UserStore.emitChange();
      break;
  }
});

export default UserStore;
