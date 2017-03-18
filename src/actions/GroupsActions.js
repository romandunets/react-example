import ActionTypes from '../constants/ActionTypes';
import groupApi from '../api/GroupApi';
import { dispatchAsync } from '../utils/ApiUtils';

export function listGroups() {
  dispatchAsync(groupApi.listGroups(), {
    request: ActionTypes.LIST_GROUPS_REQUEST,
    success: ActionTypes.LIST_GROUPS_SUCCESS,
    failure: ActionTypes.LIST_GROUPS_FAILURE
  });
}

export function getGroup(id) {
  dispatchAsync(groupApi.getGroup(id), {
    request: ActionTypes.GET_GROUP_REQUEST,
    success: ActionTypes.GET_GROUP_SUCCESS,
    failure: ActionTypes.GET_GROUP_FAILURE
  });
}
