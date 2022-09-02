import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import logo from "../../../../static/images/logo.png";
import BookTableModal from "../../../UI/modal/book-table-modal/BookTableModal";
import RegistrationModal from "../../../UI/modal/registration-modal/RegistrationModal";
import LoginModal from "../../../UI/modal/login-modal/LoginModal";
import {Link} from "react-router-dom";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";

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
        <div className='menu-header'>
            <div className='container'>
                <div className='first-line'>
                    <div className='logo'>
                        <img alt='Logo' src={logo}/>
                    </div>
                    <div className='menu-nav'>
                        <div className='menu-nav-item'>
                            <Link to={'/greetings'}>ГЛАВНАЯ</Link>
                        </div>
                        <div className='menu-nav-item'>
                            <Link to={'/menu'}>МЕНЮ</Link>
                        </div>
                        <div className='menu-nav-item'>
                            <Link to={'/cart'}>КОРЗИНА</Link>
                        </div>
                        <div className='menu-nav-item'>
                            <Link to={'/greeting#hist'}>О НАС</Link>
                        </div>
                        <div className='menu-nav-item'>
                            {isAuth
                                ? <a className='nav-item' href='#' onClick={logout}>ВЫЙТИ</a>
                                : <a className='nav-item' href='#' onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                        </div>
                    </div>
                </div>
                <div className='second-line'>
                    <div className='title'>
                        Корзина
                    </div>
                    <div className='buttons'>
                        <div className='button' onClick={bookTable}>
                            <a href='#'>ЗАКАЗ СТОЛИКА</a>
                        </div>
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