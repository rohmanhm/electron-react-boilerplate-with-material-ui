import * as Typeorm from 'typeorm'
import { ipcRenderer } from 'electron'
import { IState } from '../reducers'
import { TUser } from '../reducers/user'

export function toggleAdding (bool = false) {
  return (dispatch: Function, getState: Function) => {
    const { user } = (getState() as IState)

    if (user) {
      return user.isAdding
        ? dispatch({ type: 'STOP_ADDING' })
        : dispatch({ type: 'START_ADDING' })
    }
  }
}

export function addUser (user) {
  ipcRenderer.send('USER', 'USER_ADD', user);
  return (dispatch: any) => {
    ipcRenderer.once('USER_ADD', (event, result) => {
      dispatch({ type: 'USER_ADD', payload: result.data });
    });

    ipcRenderer.on('PAGE', (event, result) => {
      console.log(result)
    });
  };
}

export function fetchUsers (options?: any) {
  ipcRenderer.send('USER', 'USERS_FETCH', options);
  return (dispatch: any) => {
    try {
      ipcRenderer.on('USERS_FETCH', (_: any, result: any) => {
        dispatch({ type: 'USERS_FETCH', payload: result.data });
      });
    } catch (error) {
      console.log('Fetch error', error)
    }
  };
}
