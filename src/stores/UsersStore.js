import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';

let _users = [];
let _user = {};

class UsersStore extends BaseStore {
  register (action) {
    switch(action.type) {
      case ActionTypes.LIST_USERS_SUCCESS:
        _users = action.data;
        console.log(_users);
        this.emitChange();
        break;
      case ActionTypes.GET_USER_SUCCESS:
        _user = action.data;
        this.emitChange();
        break;
    }
  }

  listUsers() {
    return _users;
  }

  getUser() {
    return _user;
  }
}

export default new UsersStore;
