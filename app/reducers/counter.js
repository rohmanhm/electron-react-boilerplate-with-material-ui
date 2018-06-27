// @flow
import { TYPES } from '../actions';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

export default function counter(state: number = 0, action: actionType) {
  switch (action.type) {
    case TYPES.INCREMENT_COUNTER:
      return state + 1;
    case TYPES.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
