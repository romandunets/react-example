import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

export function createStore(spec) {
  const emitter = new EventEmitter();
  emitter.setMaxListeners(0);

  const store = Object.assign({
    emitChange() {
      emitter.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
      emitter.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
      emitter.removeListener(CHANGE_EVENT, callback);
    }
  }, spec);

  store.forEach((val, key) => {
    if (typeof val === "function") {
      store[key] = store[key].bind(store);
    }
  });

  return store;
}

export function contains(store, id, fields) {
  var contains = false;
  const item = store[id];

  if (store[id]) {
    contains = (fields) ? fields.every(field => item.hasOwnProperty(field)) : true;
  }

  return contains;
}

export function merge(store, entities) {
  for (const id in entities) {
    if (entities.hasOwnProperty(id)) {
      if (!store.hasOwnProperty(id)) {
        store[id] = entities[id];
      } else if (!areEqualShallow(store[id], entities[id])) {
        store[id] = Object.assign({}, store[id], entities[id]);
      }
    }
  }
}

function areEqualShallow(a, b) {
  for(var key in a) {
    if(!(key in b) || a[key] !== b[key]) {
        return false;
    }
  }

  for(var key in b) {
    if(!(key in a) || a[key] !== b[key]) {
        return false;
    }
  }
  
  return true;
}
