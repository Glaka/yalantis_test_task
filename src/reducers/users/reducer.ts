const initialState = {
    user: {},
    allUsers: {}
}

const userReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'action.type':
            return state

        default:
            return state
    }
}

export default userReducer