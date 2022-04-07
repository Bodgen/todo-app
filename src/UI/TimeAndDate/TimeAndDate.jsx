import React, {useEffect, useState} from 'react';
import classes from './TimeAndDate.module.css'
import clock from '../../assets/img/clock.svg'
import calendar from '../../assets/img/calendar.svg'
// import Clock from 'react-live-clock'

const TimeAndDate = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div className={classes.wrapper}>
            <div className='blockContainer'>
                <h2 className='blockTitle'>Такс такс такс</h2>
                <div className={classes.content}>
                    <div className={classes.part}>
                        <p>На часах у нас</p>
                        <div className={classes.item}>
                            <img src={clock} alt=""/>
                            {dateState.toLocaleString('ru-RU', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                hour12: false
                            })}
                        </div>
                    </div>
                    <div>
                        <p>А сегодня у нас</p>
                        <div className={classes.item}>
                            <img src={calendar} alt=""/>
                            {dateState.toLocaleDateString('ru-RU', {
                                day: 'numeric',
                                month: 'long',
                            })} {dateState.getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeAndDate;