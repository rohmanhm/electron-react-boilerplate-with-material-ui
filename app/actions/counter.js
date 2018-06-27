// @flow
import type { counterStateType } from '../reducers/counter';
import { TYPES } from '../actions';

// type actionType = {
//   +type: string
// };

export function increment() {
  return {
    type: TYPES.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: TYPES.DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (
    dispatch: (action: actionType) => void,
    getState: () => counterStateType
  ) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
