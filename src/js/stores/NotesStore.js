import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class NoteStore extends EventEmitter {
  constructor() {
    super()
    this.notes= [
      {
        id: 1,
        name: "English lesson 1",
        group: "Studies",
        updated_at: "23 minutes ago"
      },
      {
        id: 2,
        name: "Germany lesson 1",
        group: "Studies",
        updated_at: "2 days ago"
      },
      {
        id: 3,
        name: "Railroad modeling baseboard",
        group: "Hobby",
        updated_at: "about week ago"
      }
    ];
  }

  createNote(name, group) {
    const id = Date.now();

    this.notes.push({
      id,
      name,
      group,
      updated_at: "Just now"
    });

    this.emit("change");
  }

  getAll() {
    return this.notes;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_NOTE": {
        this.createNote(action.name, action.group);
      }
    }
    console.log("Notetore received an action ", action);
  }
}

const noteStore = new NoteStore;
dispatcher.register(noteStore.handleActions.bind(noteStore));

export default noteStore;
