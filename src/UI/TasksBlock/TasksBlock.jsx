import React, {useState} from 'react';
import classes from './Tasks.module.css'
import Task from "../Task/Task";
import TaskHovered from "../HoveredTask/TaskHovered";

const tasks = ['Приготовить вкусный ужин',
    'Устранить засор в раковине',
    'Стирка белого белья',
    'Разморозить холодильник']

const TasksBlock = () => {

    const [checked, setChecked] = useState(true)

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2 className={classes.title}>
                    Активные задачи
                </h2>
                <div>
                    {tasks.map((task, index) =>
                        <Task checked={checked} setChecked={setChecked}>{task}</Task>)}
                </div>
            </div>
        </div>
    );
};

export default TasksBlock;