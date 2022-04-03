import {combineReducers} from "redux";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
    task:tasksReducer
})

export default rootReducer