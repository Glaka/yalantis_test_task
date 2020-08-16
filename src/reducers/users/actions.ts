import { userActions } from './actionTypes';

const logout = () => {
    return {
        type: userActions.LOGOUT
    }
}

export default logout