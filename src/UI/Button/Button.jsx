import React from 'react';
import addButton from '../../assets/img/addButton.svg'
import classes from './Button.module.css'

const Button = ({children, img, red}) => {
    return (
        <div className={classes.container}>
            {img ?
                (<div className={classes.button}>
                    <img src={addButton} alt=""/>
                    {children}
                </div>) :
                (<div className={red ? classes.red__button : classes.functional__button}>
                    {children}
                </div>)
            }
        </div>
    );
};

export default Button;