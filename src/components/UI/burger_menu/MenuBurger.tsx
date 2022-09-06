import React, {FC, ReactElement} from 'react';
// @ts-ignore
import classes from "./MenuMurger.module.css"
// @ts-ignore
import burger_menu from "../../../static/images/burger.png";
import {Link} from "react-router-dom";

interface MenuBurgerProps {
    isBurgerSlide: boolean,
    setBurgerSlide: React.Dispatch<boolean>,
    bookTable: () => void,
    setAddDishModal: React.Dispatch<boolean>,
    isAuth: boolean,
    logout: () => void,
    setLoginModal: React.Dispatch<boolean>,
    children: ReactElement
}

const MenuBurger: FC<MenuBurgerProps> = (
    {
        isBurgerSlide,
        setBurgerSlide,
        bookTable,
        setAddDishModal,
        isAuth,
        logout,
        setLoginModal,
        children
    }
) => {
    return (
        <div>
            <a href='#' onClick={() => isBurgerSlide ? setBurgerSlide(false) : setBurgerSlide(true)}>
                <img src={burger_menu} alt={'burger-menu'}/>
            </a>
            <div className={isBurgerSlide
                ? classes.burger_slide
                : [classes.burger_slide, classes.hidden].join(' ')}
            >
                <div className={classes.nav_item}>
                    <Link className={classes.nav_item} to={'/greetings'}>ГЛАВНАЯ</Link>
                </div>
                {children}
                <div className={classes.nav_item}>
                    <a className={classes.nav_item} href='#hist'>О НАС</a>
                </div>
                <div className={classes.nav_item}>
                    <a className={classes.nav_item} onClick={bookTable}>СТОЛИК</a>
                </div>
                {localStorage.getItem('ADMIN')
                    && <div className={classes.nav_item}>
                        <a className={classes.nav_item} onClick={() => setAddDishModal(true)}>ДОБАВИТЬ</a>
                    </div>}
                <div className={classes.nav_item}>
                    {isAuth
                        ? <a className={classes.nav_item} href='#' onClick={logout}>ВЫЙТИ</a>
                        : <a className={classes.nav_item} href='#'
                             onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                </div>
            </div>
        </div>
    );
};

export default MenuBurger;