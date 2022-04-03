import React, {useEffect} from 'react';
import classes from "./ModalWindow.module.css"
import Button from "../../UI/Button/Button";
import ReactDOM from "react-dom";
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {addTask, updateNewTaskText} from "../../redux/reducers/tasks";

const ModalWindow = ({show, onClose}) => {
    const dispatch = useDispatch();

    const taskText = useSelector(state => state.task.newTaskText)

    const onSubmit = data => {
        dispatch(addTask(data.text))
        onClose();
    }

    const onNewTaskChange = (e) => {
        let task = e.target.value
        dispatch(updateNewTaskText(task))
    }


    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return ReactDOM.createPortal(
        <CSSTransition in={show} unmountOnExit timeout={{enter: 0, exit: 300}}>
            <div className={`${classes.modal} ${show ? classes.show : null}`} onClick={onClose}>
                <div className={classes.container} onClick={e => e.stopPropagation()}>
                    <div className={classes.content}>
                        <h2 className={classes.title}>
                            Добавить новую задачу
                        </h2>
                        <form onSubmit={onSubmit}>
                            <div className={classes.form}>
                                <span>Что нужно сделать?</span>
                                <input onChange={onNewTaskChange} value={taskText}/>
                                <div className={classes.buttons}>
                                    <div onClick={onClose}>
                                        <Button red>Отменить</Button>
                                    </div>
                                    <div onClick={onSubmit}>
                                        <Button>Добавить</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('root')
    );
};


export default ModalWindow;