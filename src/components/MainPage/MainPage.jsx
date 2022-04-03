import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import classes from './MainPage.module.css'
import avatar from '../../assets/img/header__avatar.svg'
import TasksBlock from "../../UI/TasksBlock/TasksBlock";
import TimeAndDate from "../../UI/TimeAndDate/TimeAndDate";
import FactOfDay from "../../UI/FactOfDay/FactOfDay";
import ModalWindow from "../ModalWindow/ModalWindow";


const MainPage = () => {
    const username = 'admin'
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className={classes.mainPage}>
            <div className={classes.header}>
                <div onClick={handleClick}>
                    <Button img>Новая задача</Button>
                </div>
                <ModalWindow onClose={() => setShow(false)} show={show}/>
                <div className={classes.user}>
                    Хорошего дня, {username}
                    <img src={avatar} alt="" className={classes.header__avatar}/>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <TasksBlock handleClick={handleClick} show={show} onClose={() => setShow(false)}/>
                </div>
                <div className={classes.rightColumn}>
                    <TimeAndDate/>
                    <FactOfDay/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;