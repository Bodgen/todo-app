import React from 'react';
import classes from './CheckBox.module.css'

const CheckBox = ({checked}) => {
    return (
        <label className={classes.checkboxContainer}>
            <input className={classes.checkbox} type="checkbox" defaultChecked={checked}/>
            <span className={classes.checkmark}></span>
        </label>
    );
};

export default CheckBox;