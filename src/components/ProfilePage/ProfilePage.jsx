import React from 'react';
import classes from './ProfilePage.module.css';
import Button from "../../UI/Button/Button";
import avatar from '../../assets/img/header__avatar.svg'
import menu from '../../assets/img/arrowDown.svg'
import ProfileBlock from "../../UI/ProfileBlock/ProfileBlock";
import TimeAndDate from "../../UI/TimeAndDate/TimeAndDate";
import FactOfDay from "../../UI/FactOfDay/FactOfDay";

const ProfilePage = () => {
    const username = 'admin';
    const email = 'admin@admin';

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Button>Основа с иконкой</Button>
                <div className={classes.user}>
                    Хорошего дня, {username}
                    <img src={avatar} alt="" className={classes.header__avatar}/>
                    <div className={classes.header_userMenu}>
                        <img src={menu} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <ProfileBlock username={username} email={email}/>
                </div>
                <div className={classes.rightColumn}>
                    <TimeAndDate/>
                    <FactOfDay/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;