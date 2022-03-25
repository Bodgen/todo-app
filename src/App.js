import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
    return (
        <div>
            <LoginPage/>
            <div className='wrapper'>
                <div className='container'>
                    <div className='content'>

                    </div>
                </div>
            </div>
        </div>);
}

export default App;
