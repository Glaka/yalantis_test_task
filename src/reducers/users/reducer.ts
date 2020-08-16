import { userActions, actionTypes } from "./actionTypes"

type usersState = any

const initialState = {
    user: {},
    allUsers: {}
}

const userReducer = (state: usersState = initialState, action: actionTypes) => {
    switch (action.type) {
        case userActions.LOGIN:
            return state
        case userActions.LOGOUT:
            return state
        default:
            return state
    }
}

export default userReducer