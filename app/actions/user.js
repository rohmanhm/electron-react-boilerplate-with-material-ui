var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ipcRenderer } from 'electron';
const orm = window.typeorm;
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
export function addUser(data) {
    return (dispatch, getState) => __awaiter(this, void 0, void 0, function* () {
        try {
            const userRepository = yield orm.getRepository('user').save(data);
            return dispatch({ type: 'ADD_USER', payload: userRepository });
        }
        catch (err) {
            console.log('ADD_USER_ERROR:', err);
        }
    });
}
export function fetchUsers(options) {
    // return async (dispatch: Function, getState: Function) => {
    //   const users = await orm.getRepository('user').find()
    //   return dispatch({ type: 'FETCH_USER', payload: users })
    // }
    ipcRenderer.send('USER', 'USERS_FETCH', options);
    return (dispatch) => {
        try {
            ipcRenderer.on('USERS_FETCH', (_, result) => {
                dispatch({ type: 'USERS_FETCH', payload: result.data });
            });
        }
        catch (error) {
            // dispatch({ type: TYPES.FETCHING_ERROR, payload: error });
            console.log('Fetch error', error);
        }
    };
}
