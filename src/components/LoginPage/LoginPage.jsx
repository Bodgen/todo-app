import React from 'react';
import Logo from "../../UI/Logo/Logo";
import classes from './LoginPage.module.css'
import LoginForm from "../../UI/LoginForm/LoginForm";

const LoginPage = ({login}) => {

    return (
        <div>
                <div>
                    <div className={classes.header}>
                        <Logo/>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={classes.container}>
                            <span className={classes.title}>Вход в аккаунт</span>
                            <LoginForm setAuth={login}/>
                            <span className={classes.footer}>
                        Еще нет аккаунта? <a className={classes.redirect}>Регистрация</a>
                            </span>
                        </div>
                    </div>
                </div>)
        </div>
    );
};

export default LoginPage;