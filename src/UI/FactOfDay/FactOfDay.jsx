import React from 'react';
import classes from './FactOfDay.module.css'

const FactOfDay = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <p className={classes.title}>Факт дня</p>
                <div className={classes.description}>
                    Человек, который просыпается в 6 утра, по статистике, закрывает все задачи к 18:00 вечера.
                </div>
            </div>
        </div>
    );
};

export default FactOfDay;