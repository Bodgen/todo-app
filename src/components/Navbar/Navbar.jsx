import React, {useState} from 'react';
import classes from './Navbar.module.css'
import home from '../../assets/img/home.svg'
import CategoriesItem from "../../UI/CategoriesItem/CategoriesItem";
import logout from '../../assets/img/log-in.svg'
import plusIcon from '../../assets/img/plus-square.svg'
import users from '../../assets/img/users.svg'
import work from '../../assets/img/work.svg'
import sport from '../../assets/img/sport.svg'
import ActiveLabel from "../../UI/ActiveLabel/ActiveLabel";
import Logo from "../../UI/Logo/Logo";

const items = [
    {name: 'Дом', path: home},
    {name: 'Семья', path: users},
    {name: 'Работа', path: work},
    {name: 'Спорт', path: sport}
]


const Navbar = () => {
    const [itemss,setItem] = useState(items)
    const [activeItem, setActiveItem] = useState(0)

    const onChangeActive = (id) => {
        setActiveItem(id)
    }
    console.log(itemss[activeItem])
    return (
        <div className={classes.navbar}>
            <Logo/>
            <div className={classes.categories}>
                <h2>
                    Категории
                </h2>
                <ul className={classes.categories__items}>
                    {itemss && itemss.map((item, index) =>
                        <li onClick={()=>onChangeActive(index)}>{activeItem === index ? <ActiveLabel/> : ''}<CategoriesItem key={`${index}_${item.name}`}
                            path={item.path}>{item.name}</CategoriesItem></li>)}
                    <CategoriesItem path={plusIcon}>Добавить</CategoriesItem>
                </ul>
            </div>
            <div className={classes.navbar__footer}>
                <img src={logout}/>
                Выйти
            </div>
        </div>
    );
};

export default Navbar;