export const SET_AUTH = 'SET_AUTH'
export const SET_USER = 'SET_USER'

export const setAuth = (value) => ({type: SET_AUTH, payload: value})
export const setUser = (user) => ({type: SET_USER, payload: user})
