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
