import {ADD_TASK, DELETE_TASK, SET_TASKS, TOGGLE_IS_COMPLETE, UPDATE_NEW_TASK_TEXT} from "../actions/tasks.action";

const initialState = {
    items: [{
        id: 0,
        title: "Приготовить вкусный ужин",
        completed: true
    },
        {
            id: 1,
            title: "Устранить засор в раковине",
            completed: true
        },
        {
            id: 2,
            title: "Стирка белого белья",
            completed: false
        }],
    newTaskText: ''
}


const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newItem = {
                id: new Date(),
                title: state.newTaskText,
                complete: false
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
                        return {...item, completed: !item.completed}
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

export default tasksReducer