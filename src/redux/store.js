import {compose, createStore} from 'redux'
import rootReducers from './reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,composeEnhancer())

export default store