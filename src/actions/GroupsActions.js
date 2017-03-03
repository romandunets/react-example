import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import groupApi from '../api/GroupApi';

function dispatchAsync(promise, types) {
  const { request, success, failure } = types;

  AppDispatcher.dispatch(request);
  promise
    .then(response => AppDispatcher.dispatch({
      actionType: success,
      data: response.data
    }))
    .catch(error => AppDispatcher.dispatch(success, { error }));
}

export function listGroups() {
  dispatchAsync(groupApi.listGroups(), {
    request: ActionTypes.LIST_GROUPS_REQUEST,
    success: ActionTypes.LIST_GROUPS_SUCCESS,
    failure: ActionTypes.LIST_GROUPS_FAILURE
  });
}
