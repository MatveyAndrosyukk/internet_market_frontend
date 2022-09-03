import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import classes from "./CartNavbar.module.css"
// @ts-ignore
import logo from "../../../../static/images/logo.png";
import BookTableModal from "../../../UI/modal/book_table_modal/BookTableModal";
import RegistrationModal from "../../../UI/modal/registration_modal/RegistrationModal";
import LoginModal from "../../../UI/modal/login_modal/LoginModal";
import {Link} from "react-router-dom";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import NavButton from "../../../UI/button/nav_button/NavButton";

interface MenuNavbarProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal: boolean,
    setRegistrationModal: React.Dispatch<boolean>

}

const MenuNavbar: FC<MenuNavbarProps> = ({modal, setModal, registrationModal, setRegistrationModal}) => {
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const {isAuth, setIsAuth} = useContext<GlobalContextValues>(GlobalContext)

    const bookTable = () => {
        if (isAuth) {
            setModal(true)
        } else {
            setRegistrationModal(true)
        }
    }

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.first_line}>
                    <div className={classes.logo}>
                        <img alt='Logo' src={logo}/>
                    </div>
                    <div className={classes.nav}>
                        <div className={classes.nav_item}>
                            <Link to={'/greetings'}>ГЛАВНАЯ</Link>
                        </div>
                        <div className={classes.nav_item}>
                            <Link to={'/menu'}>МЕНЮ</Link>
                        </div>
                        <div className={classes.nav_item}>
                            <Link to={'/cart'}>КОРЗИНА</Link>
                        </div>
                        <div className={classes.nav_item}>
                            <Link to={'/greeting#hist'}>О НАС</Link>
                        </div>
                        <div className={classes.nav_item}>
                            {isAuth
                                ? <a className={classes.nav_item} href='#' onClick={logout}>ВЫЙТИ</a>
                                : <a className={classes.nav_item} href='#' onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                        </div>
                    </div>
                </div>
                <div className={classes.second_line}>
                    <div className={classes.title}>
                        Корзина
                    </div>
                    <div className={classes.buttons}>
                        <NavButton onClick={bookTable}>
                            ЗАКАЗ СТОЛИКА
                        </NavButton>
                    </div>
                </div>
                <BookTableModal modal={modal}
                                setModal={setModal}
                                setRegistrationModal={setRegistrationModal}
                />
                <LoginModal modal={loginModal}
                            setModal={setLoginModal}
                            setRegistrationModal={setRegistrationModal}
                />
                <RegistrationModal modal={registrationModal}
                                   setModal={setRegistrationModal}
                                   setLoginModal={setLoginModal}
                />
            </div>
        </div>
    );
};

export default MenuNavbar;