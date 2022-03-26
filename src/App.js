import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
    return (
        <div>
            {/*<LoginPage/>*/}
            <div className='wrapper'>
                <Navbar/>
                <div className='container'>
                    <div className='content'>
                        <ProfilePage/>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;
