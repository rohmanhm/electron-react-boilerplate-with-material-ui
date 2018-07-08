import { actionCreatorVoid } from './helpers';
export const increment = actionCreatorVoid('INCREMENT_COUNTER');
export const decrement = actionCreatorVoid('DECREMENT_COUNTER');
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();
        if (counter % 2 === 0) {
            return;
        }
        dispatch(increment());
    };
}
export function incrementAsync(delay = 1000) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}
