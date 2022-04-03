import React from 'react';
import classes from './TaskHovered.module.css'
import trash from '../../assets/img/trash.svg'
import CheckBox from "../CheckBox/CheckBox";
import {useDispatch} from "react-redux";
import { toggleIsComplete} from "../../redux/reducers/tasks";
import {deleteTask} from "../../redux/reducers/tasks";

const TaskHovered = ({children, checked, complete, taskId}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteTask(taskId))
    }

    const handleIsComplete = () => {
        dispatch(toggleIsComplete(taskId))
    }


    return (
        <div className={classes.content}>
            <div onClick={handleIsComplete} className={classes.checkbox}>
                <CheckBox checked={complete ? !checked : checked}/>
            </div>
            <span className={classes.taskName}>{children}</span>
            <img className={classes.deleteButton} src={trash} alt="" onClick={handleClick}/>
        </div>
    );
};

export default TaskHovered;