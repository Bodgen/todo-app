import {SET_AUTH, SET_NEW_DATA} from "../actions/auth.action";

const initialState = {
    isAuth: false,
    user: {
        username: 'Admin',
        password: 'qwerty123',
        email: 'admin@gmail.com'
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.payload}
        case SET_NEW_DATA:
            return {
                ...state,
                user: {
                    username: action.payload.username,
                    email: action.payload.email
                }
            }
        default:
            return state
    }
}

export default authReducer