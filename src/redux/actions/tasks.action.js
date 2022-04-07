export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const SET_TASKS = 'SET_TASKS'
export const TOGGLE_IS_COMPLETE = 'TOGGLE_IS_COMPLETE'
export const UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT'

export const setTasks = (tasks) => ({type: SET_TASKS, payload: tasks})
export const addTask = () => ({type: ADD_TASK})
export const updateNewTaskText = (task) => ({type: UPDATE_NEW_TASK_TEXT, payload: task})
export const deleteTask = id => ({type: DELETE_TASK, payload: id})
export const toggleIsComplete = (id) => ({type: TOGGLE_IS_COMPLETE, payload: id})

