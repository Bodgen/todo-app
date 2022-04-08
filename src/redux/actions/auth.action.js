export const SET_AUTH = 'SET_AUTH'
export const SET_NEW_DATA = 'SET_NEW_DATA'

export const setAuth = (value) => ({type: SET_AUTH, payload: value})
export const setNewData = (data) => ({type: SET_NEW_DATA, payload: data})
