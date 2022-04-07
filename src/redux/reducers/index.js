import {combineReducers} from "redux";
import tasksReducer from "./tasks.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
    task:tasksReducer,
    auth:authReducer
})

export default rootReducer