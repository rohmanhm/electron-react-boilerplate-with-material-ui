import * as Typeorm from 'typeorm'
import { ipcRenderer } from 'electron'
import { IState } from '../reducers'
import { TUser } from '../reducers/user'

const orm: typeof Typeorm = (window as any).typeorm

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

export function addUser (data: TUser) {
  return async (dispatch: Function, getState: Function) => {
    try {
      const userRepository = await orm.getRepository('user').save(data)
      return dispatch({ type: 'ADD_USER', payload: userRepository })
    } catch (err) {
      console.log('ADD_USER_ERROR:', err)
    }
  }
}

export function fetchUsers (options?: any) {
  // return async (dispatch: Function, getState: Function) => {
  //   const users = await orm.getRepository('user').find()
  //   return dispatch({ type: 'FETCH_USER', payload: users })
  // }
  ipcRenderer.send('USER', 'USERS_FETCH', options);
  return (dispatch: any) => {
    try {
      ipcRenderer.on('USERS_FETCH', (_: any, result: any) => {
        dispatch({ type: 'USERS_FETCH', payload: result.data });
      });
    } catch (error) {
      // dispatch({ type: TYPES.FETCHING_ERROR, payload: error });
      console.log('Fetch error', error)
    }
  };
}