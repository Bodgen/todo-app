import React from 'react';
import classes from './CompleteTasksBlock.module.css'
import Task from "../Task/Task";
import CompleteTask from "../CompleteTask/CompleteTask";

const CompleteTasksBlock = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2 className={classes.title}>
                    Завершенные задачи
                </h2>
                <CompleteTask>aaaa</CompleteTask>
            </div>
        </div>
    );
};

export default CompleteTasksBlock;