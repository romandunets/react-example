import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import userApi from '../api/UserApi';

export function listUsers() {
  AppDispatcher.dispatch({
    actionType: ActionTypes.LIST_USERS_REQUEST
  });

  userApi.listUsers()
    .then(function (response) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_USERS_SUCCESS,
        users: response.data
      });
    })
    .catch(function (error) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.LIST_USERS_FAILURE,
        error: error
      });
    });
}
