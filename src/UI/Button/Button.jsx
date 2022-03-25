import React from 'react';
import addButton from '../../assets/img/addButton.svg'
import classes from './Button.module.css'

const Button = () => {
    return (
        <div className={classes.button}>
            <img src={addButton} alt=""/>
            Новая задача
        </div>
    );
};

export default Button;