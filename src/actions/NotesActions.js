import dispatcher from "../dispatcher";
import ActionTypes from '../constants/ActionTypes';

export function createNote(name, group) {
  dispatcher.dispatch({
    type: ActionTypes.CREATE_NOTE_REQUEST,
    name,
    group
  });
}

export function deleteNote(id) {
  dispatcher.dispatch({
    type: ActionTypes.DELETE_NOTE_REQUEST,
    id
  });
}

export function reloadNotes() {
  dispatcher.dispatch({type: ActionTypes.LIST_NOTES_REQUEST});
  setTimeout(() => {
    dispatcher.dispatch({type: ActionTypes.LIST_NOTES_SUCCESS, notes: [
      {
        id: 1,
        name: "English lesson 2",
        group: "Studies",
        updated_at: "56 minutes ago"
      },
      {
        id: 2,
        name: "Germany lesson 2",
        group: "Studies",
        updated_at: "3 days ago"
      },
      {
        id: 3,
        name: "Railroad modeling scenery",
        group: "Hobby",
        updated_at: "about week ago"
      }
    ]});
  }, 1000);
}
