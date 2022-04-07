import {SET_AUTH, SET_USER} from "../actions/auth.action";

const initialState = {
    isAuth: false,
    user: {
        username:'Admin',
        password:'qwerty123',
        email:'admin@gmail.com'
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.payload}
        case SET_USER:
            return {...state,user:action.payload}
        default:
            return state
    }
}

export default authReducer