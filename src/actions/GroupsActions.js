import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import groupApi from '../api/GroupApi';

export function listGroups() {
  AppDispatcher.dispatch({
    actionType: ActionTypes.LIST_GROUPS_REQUEST
  });

  groupApi.listGroups()
    .then(function (response) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_GROUPS_SUCCESS,
        groups: response.data
      });
    })
    .catch(function (error) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_GROUPS_FAILURE,
        error: error
      });
    });
}
