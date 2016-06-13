import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as NoteApi from '../api/NoteApi';

export function listNotes() {
  AppDispatcher.dispatch({
    actionType: ActionTypes.LIST_NOTES_REQUEST
  });

  NoteApi.listNotes()
    .then(function (response) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_NOTES_SUCCESS,
        notes: response.data
      });
    })
    .catch(function (error) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_NOTES_FAILURE,
        error: error
      });
    });
}
