import { userActions } from './actionTypes';

export const logout = () => {
    console.log('logout');
    return {
        type: userActions.LOGOUT
    }
}
export const login = () => {
    return {
        type: userActions.LOGIN
    }
}
