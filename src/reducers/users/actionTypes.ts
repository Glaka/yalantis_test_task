export enum userActions {
    ADD_USER = 'ADD_USER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

interface logout {
    type: userActions.LOGOUT
}
interface login {
    type: userActions.LOGIN
}
interface addUser {
    type: userActions.ADD_USER
}

export type actionTypes = logout
    | addUser
    | login;