import React from 'react';
import addButton from '../../assets/img/addButton.svg'
import classes from './Button.module.css'

const Button = ({children}) => {
    return (
        <div className={classes.button}>
            <img src={addButton} alt=""/>
            {children}
        </div>
    );
};

export default Button;