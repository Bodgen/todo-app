import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {useRoutes,Navigate} from "react-router-dom";
import {useSelector} from "react-redux";


function App() {
    const auth = useSelector(state => state.auth.isAuth)

    let routes = [{
        path: "/",
        element: <MainPage/>
    }, {path: "/user", element: <ProfilePage/>}]

    let elements = useRoutes(routes)
    return (
        <div>
            {!auth ? <Navigate to='/login'/> :
            <div>
                <div className='wrapper'>
                    <Sidebar/>
                    <div className='container'>
                        <div className='content'>
                            {elements}
                        </div>
                    </div>
                </div>
            </div>}
        </div>);
}

export default App;
