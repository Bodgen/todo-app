import React from 'react';
import classes from './ModalWindow.module.css'
import Button from "../../UI/Button/Button";

const ModalWindow = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h2 className={classes.title}>
                    Добавить новую задачу
                </h2>
                <div>
                    <form action="">
                            <span>Что нужно сделать?</span>
                            <input type="text"/>
                            <span>Категория</span>
                            <input type="text"/>
                    </form>
                </div>
                <div className={classes.buttons}>
                    <Button red>Отменить</Button>
                    <Button>Добавить</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;