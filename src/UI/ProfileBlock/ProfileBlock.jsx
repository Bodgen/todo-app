import React, {useEffect, useState} from 'react';
import classes from './ProfileBlock.module.css';
import CheckBox from "../CheckBox/CheckBox";
import avatar from '../../assets/img/header__avatar.svg'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {setNewData} from "../../redux/actions/auth.action";


const ProfileBlock = ({user}) => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    const onSubmit = (data) => {
        setLoading(false)
        dispatch(setNewData(data))
        setInterval(() => setLoading(true), 5000)
    }

    console.log(loading)

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {loading ?
                    <div className={classes.content}>
                        <div className={classes.avatar}>
                            <img src={avatar} alt/>
                            <div onClick={() => alert('Sorry,but you can`t change avatar!It`s a project problem(')}>
                                <a href='#'>изменить фото</a>
                            </div>
                        </div>
                        <div className={classes.description}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <span>Ваш никнейм:</span>
                                <input {...register('username')} type="text" defaultValue={user.username}/>
                                <span>Ваша почта:</span>
                                <input {...register('email')} type="text" defaultValue={user.email}/>
                                <div className={classes.subscribe}>
                                    <CheckBox small/>
                                    <span className={classes.subscribe__text}>Подписаться на рассылку</span>
                                </div>
                                <div className={classes.submit__button}>
                                    <input type="submit" value='Сохранить изменения'/>
                                </div>
                            </form>
                        </div>
                    </div> : <div>Loading...</div>}
            </div>
        </div>
    );
};

export default ProfileBlock;