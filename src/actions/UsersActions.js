import ActionTypes from '../constants/ActionTypes';
import userApi from '../api/UserApi';
import { dispatchAsync } from '../utils/ApiUtils';

export function listUsers() {
  dispatchAsync(userApi.listUsers(), {
    request: ActionTypes.LIST_USERS_REQUEST,
    success: ActionTypes.LIST_USERS_SUCCESS,
    failure: ActionTypes.LIST_USERS_FAILURE
  });
}
