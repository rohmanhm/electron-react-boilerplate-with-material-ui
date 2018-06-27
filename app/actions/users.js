// @flow
import { ipcRenderer } from 'electron';

import { TYPES } from '../actions';

export function userAdd(user) {
  ipcRenderer.send('USER', TYPES.USER_ADD, user);
  return (dispatch: dispatchType) => {
    dispatch({ type: TYPES.FETCHING_ON });
    ipcRenderer.once('USER_ADD', (event, result) => {
      dispatch({ type: TYPES.USER_ADD, payload: result.data });
      dispatch({ type: TYPES.FETCHING_OFF });
    });
  };
}

export function userDelete(userId: string, option: boolean) {
  const toDelete = { id: userId, isDeleted: option };
  ipcRenderer.send('USER', TYPES.USER_DELETE, toDelete);
  return (dispatch: dispatchType) => {
    dispatch({ type: TYPES.FETCHING_ON });
    ipcRenderer.on('USER_DELETE', (event, result) => {
      dispatch({ type: TYPES.USER_DELETE, payload: result.data[0].id, event });
      dispatch({ type: TYPES.FETCHING_OFF });
    });
  };
}

export function userFetch(userId: string) {
  ipcRenderer
    .send(TYPES.USER_FETCH, userId)
    .then(result => ({
      type: TYPES.USER_FETCH,
      payload: result
    }))
    .catch(err => ({
      type: TYPES.ERROR_MSG,
      payload: { from: userFetch, err }
    }));
}

export function userUpdate(user) {
  ipcRenderer.send('USER', TYPES.USER_UPDATE, user);
  return (dispatch: dispatchType) => {
    dispatch({ type: TYPES.FETCHING_ON });
    ipcRenderer.once('USER_UPDATE', (event, result) => {
      dispatch({ type: TYPES.USER_UPDATE, payload: result.data });
      dispatch({ type: TYPES.FETCHING_OFF });
    });
  };
}

export function usersFetch(options) {
  ipcRenderer.send('USER', TYPES.USERS_FETCH, options);
  return (dispatch: dispatchType) => {
    dispatch({ type: TYPES.FETCHING_ON });
    try {
      ipcRenderer.on('USERS_FETCH', (event, result) => {
        dispatch({ type: TYPES.TRASH, payload: options.isDeleted });
        dispatch({ type: TYPES.USERS_FETCH, payload: result.data });
        dispatch({ type: TYPES.FETCHING_OFF });
      });
    } catch (error) {
      dispatch({ type: TYPES.FETCHING_ERROR, payload: error });
    }
  };
}
