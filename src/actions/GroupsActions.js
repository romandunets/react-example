import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as GroupApi from '../api/GroupApi';

export function listGroups() {
  AppDispatcher.dispatch({
    actionType: ActionTypes.LIST_GROUPS_REQUEST
  });

  GroupApi.listGroups()
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
