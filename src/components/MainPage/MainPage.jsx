import React from 'react';
import Button from "../../UI/Button/Button";
import classes from './MainPage.module.css'
import avatar from '../../assets/img/header__avatar.svg'
import menu from '../../assets/img/arrowDown.svg'
import ProgressForWeek from "../../UI/ProgreesForWeek/ProgressForWeek";
import TasksBlock from "../../UI/TasksBlock/TasksBlock";
import TimeAndDate from "../../UI/TimeAndDate/TimeAndDate";
import FactOfDay from "../../UI/FactOfDay/FactOfDay";
import CompleteTasksBlock from "../../UI/CompleteTasksBlock/CompleteTasksBlock";


const MainPage = () => {
    const username = 'admin'

    return (
        <div className={classes.mainPage}>
            <div className={classes.header}>
                <Button/>
                <div className={classes.user}>
                    Хорошего дня, {username}
                    <img src={avatar} alt="" className={classes.header__avatar}/>
                    <div className={classes.header_userMenu}>
                        <img src={menu} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <ProgressForWeek/>
                    <TasksBlock/>
                </div>
                <div className={classes.rightColumn}>
                    <TimeAndDate/>
                    <FactOfDay/>
                    <CompleteTasksBlock/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;