import React from 'react';
import classes from './LoginForm.module.css';
import {useForm} from "react-hook-form";

const LoginForm = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} placeholder='E-mail'/>
            <input {...register('password')} placeholder='Пароль'/>
            <div className={classes.submit__button}>
                <input type='submit' value="Войти"/>
            </div>
        </form>
    );
};

export default LoginForm;