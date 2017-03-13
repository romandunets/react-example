import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

var CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
  constructor () {
    super();
    this.register = this.register.bind(this);
    AppDispatcher.register(this.register);
  }

  emitChange () {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default BaseStore;
