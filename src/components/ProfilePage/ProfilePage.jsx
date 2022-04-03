import React from 'react';
import classes from './ProfilePage.module.css';
import ProfileBlock from "../../UI/ProfileBlock/ProfileBlock";
import TimeAndDate from "../../UI/TimeAndDate/TimeAndDate";
import FactOfDay from "../../UI/FactOfDay/FactOfDay";

const ProfilePage = () => {
    const username = 'admin';
    const email = 'admin@admin';

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <ProfileBlock username={username} email={email}/>
                </div>
                <div className={classes.rightColumn}>
                    <TimeAndDate/>
                    <FactOfDay/>
                </div>
            </div>
        </div>);
};

export default ProfilePage;