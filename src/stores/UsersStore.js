import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { createStore, merge } from '../utils/StoreUtils';

const _users = [];
const _user = {};

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
      merge(_users, action.data);
      UserStore.emitChange();
      break;
    case ActionTypes.GET_USER_SUCCESS:
      merge(_user, action.data);
      UserStore.emitChange();
      break;
  }
});

export default UserStore;
