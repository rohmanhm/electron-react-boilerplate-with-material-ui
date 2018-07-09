import { ipcRenderer } from 'electron';
export function toggleAdding(bool = false) {
    return (dispatch, getState) => {
        const { user } = getState();
        if (user) {
            return user.isAdding
                ? dispatch({ type: 'STOP_ADDING' })
                : dispatch({ type: 'START_ADDING' });
        }
    };
}
export function addUser(user) {
    ipcRenderer.send('USER', 'USER_ADD', user);
    return (dispatch) => {
        ipcRenderer.once('USER_ADD', (event, result) => {
            dispatch({ type: 'USER_ADD', payload: result.data });
        });
        ipcRenderer.on('PAGE', (event, result) => {
            console.log(result);
        });
    };
}
export function fetchUsers(options) {
    ipcRenderer.send('USER', 'USERS_FETCH', options);
    return (dispatch) => {
        try {
            ipcRenderer.on('USERS_FETCH', (_, result) => {
                dispatch({ type: 'USERS_FETCH', payload: result.data });
            });
        }
        catch (error) {
            console.log('Fetch error', error);
        }
    };
}
