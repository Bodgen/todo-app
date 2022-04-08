import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import LoginPage from "./components/LoginPage/LoginPage";
import store from "./redux/store";
import ErrorPage from "./components/ErrorPage/ErrorPage";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>

                </Routes>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

