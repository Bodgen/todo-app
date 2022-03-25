import React from 'react';
import classes from './ProgressItem.module.css'

const ProgressItem = ({title, count}) => {

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.circle}>
                <div className={classes.content}>
                    <p className={classes.number}>{count}</p>
                    <p className={classes.paragraph}>задач</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressItem;