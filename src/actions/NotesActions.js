import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import noteApi from '../api/NoteApi';

export function listNotes() {
  AppDispatcher.dispatch({
    actionType: ActionTypes.LIST_NOTES_REQUEST
  });

  noteApi.listNotes()
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
