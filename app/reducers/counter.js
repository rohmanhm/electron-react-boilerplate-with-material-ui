import { increment, decrement } from '../actions/counter';
export default function counter(state = 0, action) {
    if (increment.test(action)) {
        return state + 1;
    }
    else if (decrement.test(action)) {
        return state - 1;
    }
    return state;
}
