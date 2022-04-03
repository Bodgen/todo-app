import React from 'react';
import classes from './ProfileBlock.module.css';
import CheckBox from "../CheckBox/CheckBox";
import avatar from '../../assets/img/header__avatar.svg'


const ProfileBlock = ({username, email}) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <img src={avatar} alt/>
                    <a href='#'>изменить фото</a>
                </div>
                <div className={classes.description}>
                    <form action="">
                        <span>Ваш никнейм:</span>
                        <input type="text" defaultValue={username}/>
                        <span>Ваша почта:</span>
                        <input type="text" defaultValue={email}/>
                        <div className={classes.subscribe}>
                            <CheckBox small/>
                            <span className={classes.subscribe__text}>Подписаться на рассылку</span>
                        </div>
                        <div className={classes.submit__button}>
                            <input type="submit" value='Сохранить изменения'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileBlock;