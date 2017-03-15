import ActionTypes from '../constants/ActionTypes';
import BaseStore from './BaseStore';

let _groups = [];
let _group= {};

class GroupStore extends BaseStore {
  register (action) {
    switch(action.type) {
      case ActionTypes.LIST_GROUPS_SUCCESS:
        _groups = action.data;
        this.emitChange();
        break;
      case ActionTypes.GET_GROUP_SUCCESS:
        _group = action.data;
        this.emitChange();
        break;
    }
  }

  listGroups() {
    return _groups;
  }

  getGroup() {
    return _group;
  }
}

const groupStore = new GroupStore();
export default groupStore;
