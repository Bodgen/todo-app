import {ADD_TASK, DELETE_TASK, SET_TASKS, TOGGLE_IS_COMPLETE, UPDATE_NEW_TASK_TEXT} from "../actions/tasks";

const initialState = {
    items: [],
    newTaskText: ''
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newItem = {
                id: new Date(),
                text: state.newTaskText,
                isComplete: false
            }
            return {
                ...state,
                items: [...state.items, newItem],
                newTaskText: ''
            }
        case SET_TASKS:
            return {
                ...state,
                items: action.payload
            }
        case DELETE_TASK:
            if (state.items.length === 1)
                return {
                    ...state,
                    items: []
                }
            return {
                ...state,
                items: state.items.filter(items => items.id !== action.payload)
            }
        case TOGGLE_IS_COMPLETE:
            debugger
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        return {...item, isComplete: !item.isComplete}
                    }
                    return item
                })
            }
        case UPDATE_NEW_TASK_TEXT:
            return {
                ...state,
                newTaskText: action.payload
            }
        default:
            return state
    }

}
export const setTasks = (tasks) => ({type: SET_TASKS, payload: tasks})
export const addTask = () => ({type: ADD_TASK})
export const updateNewTaskText = (task) => ({type: UPDATE_NEW_TASK_TEXT, payload: task})
export const deleteTask = id => ({type: DELETE_TASK, payload: id})
export const toggleIsComplete = (id) => ({type: TOGGLE_IS_COMPLETE, payload: id})

export default tasksReducer