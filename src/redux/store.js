import {applyMiddleware, compose, createStore} from 'redux'
import rootReducers from './reducers'
import thunk from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,composeEnhancer(applyMiddleware(thunk)))

export default store