import React from 'react';
import addButton from '../../assets/img/addButton.svg'
import classes from './Button.module.css'

const Button = ({children, img, red}) => {
    return (
        <div className={classes.container}>
            <div className={!img ? classes.width : null}>
                <div className={red ? classes.button : classes.red__button}>
                    {img && <img src={addButton} alt=""/>}
                    <span>
                        {children}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Button;