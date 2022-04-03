import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/img/logo.svg'


const Logo = () => {
    return (
        <div className={classes.navbar__top}>
            <img src={logo} alt=''/>Tasks<br/>Book
        </div>
    );
};

export default Logo;