export const defaultState = {
    isAdding: false,
    users: []
};
export default function counter(state, action) {
    switch (action.type) {
        case 'START_ADDING':
            return Object.assign({}, state, { isAdding: true });
        case 'STOP_ADDING':
            return Object.assign({}, state, { isAdding: false });
        case 'USER_ADD':
            console.log('REDUCER USER_ADD', action.type, action.payload);
            const newUsers = state.users.push(action.payload);
            return Object.assign({}, state, { users: newUsers });
        case 'USERS_FETCH':
            return Object.assign({}, state, { users: action.payload });
        default:
            return defaultState;
    }
    return state;
}
