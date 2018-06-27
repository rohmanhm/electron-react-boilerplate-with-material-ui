// @flow

/**
 * Page is for aplication global state
 */
import { TYPES } from '../actions';

type actionType = {
  +type: string
};

const initialState = {
  fetching: 0,
  error: null,
  trash: false
};

export default function page(state = initialState, action: actionType) {
  switch (action.type) {
    case TYPES.FETCHING_ON:
      return { ...state, fetching: state.fetching + 1 };
    case TYPES.FETCHING_OFF:
      if (state.fetching > 0) {
        return { ...state, fetching: state.fetching - 1 };
      }
      return state;
    case TYPES.FETCHING_ERROR:
      return { ...state, fetching: false, error: action.payload.error };
    case TYPES.MESSAGE_SET:
      return { ...state, message: action.payload };
    case TYPES.MESSAGE_CLEAR:
      return { ...state, message: '' };
    case TYPES.TRASH:
      if (action.payload) {
        return { ...state, trash: true };
      }
      return { ...state, trash: false };
    default:
      return state;
  }
}
