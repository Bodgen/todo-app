import React from 'react';
import classes from './ProfilePage.module.css';
import ProfileBlock from "../../UI/ProfileBlock/ProfileBlock";
import TimeAndDate from "../../UI/TimeAndDate/TimeAndDate";
import FactOfDay from "../../UI/FactOfDay/FactOfDay";
import { useSelector} from "react-redux";

const ProfilePage = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.leftColumn}>
                    <ProfileBlock user={user}/>
                </div>
                <div className={classes.rightColumn}>
                    <TimeAndDate/>
                    <FactOfDay/>
                </div>
            </div>
        </div>);
};

export default ProfilePage;