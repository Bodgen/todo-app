import React, {useState} from 'react';
import classes from './Task.module.css'
import TaskHovered from "../HoveredTask/TaskHovered";

const Task = ({children, checked, setChecked}) => {

    const [isShown, setIsShown] = useState(false)

    return (
        <div className={classes.wrapper}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            {isShown ?
                <div className={classes.content}>
                    {children}
                </div> : <TaskHovered checked={checked} setChecked={setChecked}>{children}</TaskHovered>}
        </div>
    );
};

export default Task;