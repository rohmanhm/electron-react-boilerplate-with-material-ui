import { IActionWithPayload } from '../actions/helpers';
import { increment, decrement } from '../actions/counter';

export type TUser = {
  name: string
  class: string
  nik: string
  address: string
  id?: string
}

export type TState = {
  isAdding: boolean
  users: TUser[]
}

export const defaultState: TState = {
  isAdding: false,
  users: []
}

export default function counter(state: TState, action: IActionWithPayload<any>) {
  switch (action.type) {
    case 'START_ADDING':
      return { ...state, ...{ isAdding: true }}
    case 'STOP_ADDING':
      return { ...state, ...{ isAdding: false }}
    case 'ADD_USER':
      const newUsers = state.users.push(action.payload)
      return { ...state, users: newUsers }
    case 'USERS_FETCH':
      return { ...state, users: action.payload }
    default:
      return defaultState
  }

  return state;
}
