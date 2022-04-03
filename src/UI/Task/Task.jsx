import React, {useState} from 'react';
import classes from './Task.module.css'
import TaskHovered from "../HoveredTask/TaskHovered";

const Task = ({children, checked, id}) => {

    const [isShown, setIsShown] = useState(false)
    return (
        <div className={classes.wrapper}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            {!isShown ?
                <div className={checked ? classes.taskComplete : classes.content}>
                    {children}
                </div> : <TaskHovered taskId={id} checked={checked} >{children}</TaskHovered>}
        </div>
    );
};

export default Task;