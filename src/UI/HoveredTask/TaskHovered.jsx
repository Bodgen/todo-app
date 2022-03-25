import React, {useState} from 'react';
import classes from './TaskHovered.module.css'
import edit from '../../assets/img/edit.svg'
import trash from '../../assets/img/trash.svg'
import CheckBox from "../CheckBox/CheckBox";

const TaskHovered = ({children, checked, setChecked, complete}) => {
    return (
        <div className={classes.content}>
            <div onClick={() => {
                setChecked(!checked)
            }}>
                <CheckBox checked={complete ? !checked : checked}/>
            </div>
            <span className={classes.taskName}>{children}</span>
            {!complete &&
                <img className={classes.editButton} src={edit} alt=""/>}
            <img className={classes.deleteButton} src={trash} alt=""/>
        </div>
    );
};

export default TaskHovered;