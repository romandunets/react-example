import { EventEmitter } from "events";

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
}

const noteStore = new NoteStore;

export default noteStore;
