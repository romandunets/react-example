import ActionTypes from '../constants/ActionTypes';
import noteApi from '../api/NoteApi';
import { dispatchAsync } from '../utils/ApiUtils';

export function listNotes() {
  dispatchAsync(noteApi.listNotes(), {
    request: ActionTypes.LIST_NOTES_REQUEST,
    success: ActionTypes.LIST_NOTES_SUCCESS,
    failure: ActionTypes.LIST_NOTES_FAILURE
  });
}

export function getNote(id) {
  dispatchAsync(noteApi.getNote(id), {
    request: ActionTypes.GET_NOTE_REQUEST,
    success: ActionTypes.GET_NOTE_SUCCESS,
    failure: ActionTypes.GET_NOTE_FAILURE
  });
}
