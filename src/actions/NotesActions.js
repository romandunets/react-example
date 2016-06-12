import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as NoteApi from '../api/NoteApi';

export function listNotes() {
  AppDispatcher.dispatch({
    type: ActionTypes.LIST_NOTES_REQUEST
  });

  NoteApi.listNotes()
    .then(function (response) {
      AppDispatcher.dispatch({
        type: ActionTypes.LIST_NOTES_SUCCESS,
        notes: response.data
      });
    })
    .catch(function (error) {
      AppDispatcher.dispatch({
        type: ActionTypes.LIST_NOTES_FAILURE,
        error: error
      });
    });
}

export function createNote(name, group) {
  AppDispatcher.dispatch({
    type: ActionTypes.CREATE_NOTE_REQUEST,
    name,
    group
  });
}

export function deleteNote(id) {
  AppDispatcher.dispatch({
    type: ActionTypes.DELETE_NOTE_REQUEST,
    id
  });
}

export function reloadNotes() {
  AppDispatcher.dispatch({type: ActionTypes.LIST_NOTES_REQUEST});
  setTimeout(() => {
    AppDispatcher.dispatch({type: ActionTypes.LIST_NOTES_SUCCESS, notes: [
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
