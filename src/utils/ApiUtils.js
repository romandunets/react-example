import AppDispatcher from '../dispatcher/AppDispatcher';

export function dispatchAsync(promise, types) {
  const { request, success, failure } = types;

  AppDispatcher.dispatch(request);
  promise
    .then(response => AppDispatcher.dispatch({
      type: success,
      data: response.data
    }))
    .catch(error => AppDispatcher.dispatch(success, { error }));
}
