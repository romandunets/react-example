import { EventEmitter } from 'events';
import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

class BaseStore extends EventEmitter {
  constructor () {
    super();
    this.register = this.register.bind(this);
    AppDispatcher.register(this.register);
  }

  emitChange () {
    this.emit(ActionTypes.CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(ActionTypes.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ActionTypes.CHANGE_EVENT, callback);
  }
}

export default BaseStore;
