import React from 'react';
import classes from './TasksBlock.module.css'
import Task from "../Task/Task";
import {useSelector} from "react-redux";


const TasksBlock = () => {
    const items = useSelector(state => state.task.items)

    return (
        <div className={classes.wrapper}>
            <div className='blockContainer'>
                <h2 className='blockTitle'>
                    Активные задачи
                </h2>
                <div>
                    {items && items.map((e, index) =>
                        !e.completed &&
                        <Task key={`${e}_${index}`} checked={e.completed} id={e.id}>{e.title}</Task>)}
                </div>
                {items && items.length === 0 ?
                    null : (<div><h2 className='blockTitle'>
                        Завершенные задачи
                    </h2>
                        <div>
                            {items && items.map((e, index) =>
                                e.completed &&
                                <Task key={`${e}_${index}`} checked={e.completed} id={e.id}>{e.title}</Task>
                            )}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default TasksBlock;