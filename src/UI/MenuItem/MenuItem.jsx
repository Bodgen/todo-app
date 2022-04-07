import React from 'react';
import classes from "./MenuItem.module.css";
import {NavLink, useLocation} from "react-router-dom";

const MenuItem = ({children, path,url,setActiveItem}) => {

    const location = useLocation()

    if (location.pathname==='/')
        setActiveItem(0)
    else if(location.pathname==='/user'){
        setActiveItem(1)
    }
    return (
        <NavLink to={url}>
            <div className={classes.categories__item}>
                <img src={path} alt=''/>
                {children}
            </div>
        </NavLink>
    );
};

export default MenuItem;