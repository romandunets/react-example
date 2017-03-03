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
