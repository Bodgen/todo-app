import React, {useEffect} from 'react';
import classes from './LoginForm.module.css';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/actions/auth.action";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Error from "../Error/Error";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required()
})

const LoginForm = () => {
    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        if (data.email === auth.user.email && data.password === auth.user.password)
            dispatch(setAuth(true))
        if (data.email !== auth.user.email) {
            alert('Wrong email')
        } else if (auth.user.password !== auth.user.password)
            alert('Wrong password')
    }

    useEffect(() => {
        if (auth.isAuth) {
            navigate('/')
        }
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', {})} placeholder='E-mail' required/>
            {errors.email && <Error>{errors.email?.message}</Error>}
            <input {...register('password')} type='password' placeholder='Пароль' required/>
            {errors.password && <Error>{errors.password?.message}</Error>}
            <div className={classes.submit__button}>
                <input type='submit' value="Войти"/>
            </div>
        </form>
    );
};

export default LoginForm;