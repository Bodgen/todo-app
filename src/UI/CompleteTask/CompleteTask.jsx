import React, {useState} from 'react';
import TaskHovered from "../HoveredTask/TaskHovered";
import classes from "./CompleteTask.module.css";

const CompleteTask = ({children}) => {
    const [isShown, setIsShown] = useState(false)
    return (
        <div className={classes.wrapper}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            {!isShown ?
                <div className={classes.content}>
                    {children}
                </div> : <TaskHovered complete>{children}</TaskHovered>}
        </div>
    );
};

export default CompleteTask;