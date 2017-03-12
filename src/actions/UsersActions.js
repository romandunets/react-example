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

export function getUser(id) {
  dispatchAsync(userApi.getUser(id), {
    request: ActionTypes.GET_USER_REQUEST,
    success: ActionTypes.GET_USER_SUCCESS,
    failure: ActionTypes.GET_USER_FAILURE
  });
}
