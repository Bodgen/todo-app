import {tasksAPI} from "../../api/api";
import {setTasks} from "../reducers/tasks";

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const SET_TASKS = 'SET_TASKS'
export const TOGGLE_IS_COMPLETE = 'TOGGLE_IS_COMPLETE'
export const UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT'

export const getTasks = () => {
    return async (dispatch) => {
        tasksAPI.getTasks().then(data => {
            dispatch(setTasks(data))
        })
    }
}


