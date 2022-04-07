import React, {useState} from 'react';
import classes from './Sidebar.module.css'
import MenuItem from "../../UI/MenuItem/MenuItem";
import logout from '../../assets/img/log-in.svg'
import user from '../../assets/img/user.svg'
import work from '../../assets/img/work.svg'
import ActiveLabel from '../../UI/ActiveLabel/ActiveLabel';
import Logo from '../../UI/Logo/Logo';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setAuth} from "../../redux/actions/auth.action";


const Sidebar = () => {

    const dispatch = useDispatch()

    const menuItems = [
        {name: 'Задачи', path: work, url: '/'},
        {name: 'Личный кабинет', path: user, url: '/user'}
    ]

    const [activeItem, setActiveItem] = useState(null)

    const onChangeActive = (id) => {
        setActiveItem(id)
    }

    const handleLogout = ()=>{
        dispatch(setAuth(false))
    }



    return (
        <div className={classes.navbar}>
            <Link to='/'>
                <Logo/>
            </Link>
            <div className={classes.categories}>
                <h2>
                    Меню
                </h2>
                <ul className={classes.categories__items}>
                    {menuItems && menuItems.map((item, index) =>
                        <li onClick={() => onChangeActive(index)} key={`${index}_${item.name}`}>
                            {activeItem === index ?
                                <ActiveLabel/> : ''}
                            <MenuItem setActiveItem={onChangeActive} path={item.path} url={item.url}>{item.name}
                            </MenuItem>
                        </li>)}
                </ul>
            </div>
            <Link to='/login'>
                <div className={classes.navbar__footer} onClick={handleLogout}>
                    <img src={logout} alt=''/>
                    Выйти
                </div>
            </Link>
        </div>
    )
        ;
};

export default Sidebar;