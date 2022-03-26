import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
    return (
        <div>
            {/*<LoginPage/>*/}
            <div className='wrapper'>
                <Navbar/>
                <div className='container'>
                    <div className='content'>
                        <MainPage/>
                    </div>
                </div>
            </div>
            {/*<ModalWindow/>*/}
        </div>);
}

export default App;
