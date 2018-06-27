// @flow
import { TYPES } from '../actions';

export type user = {
  id?: string,
  name: string,
  email: string,
  isAdmin: boolean | typeof undefined
};

export type userStateType = Array<user> | void;

export default function users(state: userStateType = [], action: actionType) {
  switch (action.type) {
    case TYPES.USER_ADD:
      return [...state, ...action.payload];
    case TYPES.USER_DELETE:
      if (state && action.payload && state.length) {
        return state.filter(uid => action.payload !== uid.id);
      }
      return state;
    case TYPES.USER_FETCH:
      return state;
    case TYPES.USER_UPDATE:
      return state;
    case TYPES.USERS_FETCH:
      return [...action.payload];
    default:
      return state;
  }
}
