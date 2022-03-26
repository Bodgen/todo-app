import React from 'react';
import classes from './CheckBox.module.css'

const CheckBox = ({checked,small}) => {
    return (
        <label className={classes.checkboxContainer}>
            <input className={classes.checkbox} type="checkbox" defaultChecked={checked}/>
            <span className={small ? classes.smallCheckmark :classes.largeCheckmark}></span>
        </label>
    );
};

export default CheckBox;