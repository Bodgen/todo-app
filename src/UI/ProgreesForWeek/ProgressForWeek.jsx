import React from 'react';
import classes from './ProgressForWeek.module.css'
import ProgressItem from "../ProgressItem/ProgressItem";

const ProgressForWeek = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2 className={classes.title}>Успехи за неделю</h2>
                <div className={classes.progress}>
                    <ProgressItem title='Успехов' count={100}/>
                    <ProgressItem title='Успехов' count={100}/>
                    <ProgressItem title='Успехов' count={100}/>
                </div>
            </div>
        </div>
    );
};

export default ProgressForWeek;