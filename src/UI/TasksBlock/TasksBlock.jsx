import React from 'react';
import classes from './Tasks.module.css'
import Task from "../Task/Task";
import {useSelector} from "react-redux";

const TasksBlock = () => {

    const items = useSelector(state => state.task.items)

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2 className={classes.title}>
                    Активные задачи
                </h2>
                <div>
                    {items.map((e, index) =>
                        !e.isComplete &&
                        <Task key={`${e}_${index}`} checked={e.isComplete} id={e.id}>{e.text}</Task>)}
                </div>
                {items.length === 0 ?
                    null : (<div><h2 className={classes.title}>
                        Завершенные задачи
                    </h2>
                        <div>
                            {items.map((e, index) =>
                                e.isComplete &&
                                <Task key={`${e}_${index}`} checked={e.isComplete} id={e.id}>{e.text}</Task>
                            )}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default TasksBlock;