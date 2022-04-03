import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import {getTasks} from "./redux/actions/tasks";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTasks())
    },[])

    return (
        <div>
            <div className='wrapper'>
                <Sidebar/>
                <div className='container'>
                    <div className='content'>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/user' element={<ProfilePage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
