import React from 'react';
import classes from "./MenuItem.module.css";
import {Link} from "react-router-dom";

const MenuItem = ({children, path,url}) => {
    return (
        <Link to={url}>
            <div className={classes.categories__item}>
                <img src={path} alt=''/>
                {children}
            </div>
        </Link>
    );
};

export default MenuItem;