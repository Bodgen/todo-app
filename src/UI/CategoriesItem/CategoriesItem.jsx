import React from 'react';
import homeSVG from '../../assets/img/home.svg'
import classes from "./CategoriesItem.module.css";

const CategoriesItem = ({children,path}) => {
    return (
        <div className={classes.categories__item}>
            <img src={path}/>
            {children}
        </div>
    );
};

export default CategoriesItem;