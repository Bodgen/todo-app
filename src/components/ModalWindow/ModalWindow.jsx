import React from 'react';
import classes from './ModalWindow.module.css'
import Button from "../../UI/Button/Button";

const ModalWindow = ({show,onClose}) => {
    if (!show) {
        return null
    }
    // console.log(show)
    return (
        <div className={classes.modal}>
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
                        <div onClick={onClose}>
                            <Button red>Отменить</Button>
                        </div>
                        <Button>Добавить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;