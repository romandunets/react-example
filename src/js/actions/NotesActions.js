import dispatcher from "../dispatcher";

export function createNote(name, group) {
  dispatcher.dispatch({
    type: "CREATE_NOTE",
    name,
    group
  });
}

export function deleteNote(id) {
  dispatcher.dispatch({
    type: "DELETE_NOTE",
    id
  });
}
