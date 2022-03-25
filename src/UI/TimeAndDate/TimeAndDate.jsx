import React from 'react';
import classes from './TimeAndDate.module.css'
import clock from '../../assets/img/clock.svg'
import calendar from '../../assets/img/calendar.svg'
// import Clock from 'react-live-clock'

const TimeAndDate = () => {
    let date = new Date()

    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
        'августа', 'сентября', 'октября', 'ноября', 'декабря']

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h2 className={classes.title}>Такс такс такс</h2>
                <div className={classes.content}>
                    <div className={classes.part}>
                        <p>На часах у нас</p>
                        <div className={classes.item}>
                            <img src={clock} alt=""/>
                            {/*<Clock format="HH:mm:ss" interval={1000} ticking={true}/>*/}
                        </div>
                    </div>
                    <div>
                        <p>А сегодня у нас</p>
                        <div className={classes.item}>
                            <img src={calendar} alt=""/>
                            {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeAndDate;