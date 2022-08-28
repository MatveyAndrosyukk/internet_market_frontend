import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import logo from '../static/images/logo.png';
// @ts-ignore
import cart from '../static/images/cart.png';
// @ts-ignore
import phone from '../static/images/phone.png';
import BookTableModal from "./UI/modal/book_table_modal/BookTableModal";
import LoginModal from "./UI/modal/login_modal/LoginModal";
import RegistrationModal from "./UI/modal/registration_modal/RegistrationModal";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/context";

const Navbar:FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const authContext = useContext(AuthContext)

    if (modal || loginModal){
        document.body.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = ''
    }

    const bookTable = () => {
        if (authContext?.isAuth){
            setModal(true)
        }else {
            setRegistrationModal(true)
        }
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-line'>
                    <div className='header-logo'>
                        <img alt='Logo' src={logo}/>
                    </div>
                    <div className='nav'>
                        <Link className='nav-item' to={'/greetings'}>ГЛАВНАЯ</Link>
                        <Link className='nav-item' to={'/menu'}>МЕНЮ</Link>
                        <a className='nav-item' href='#hist'>О НАС</a>
                        {authContext?.isAuth
                        ? <a className='nav-item' href='#' onClick={() => authContext?.setIsAuth(false)}>ВЫЙТИ</a>
                        : <a className='nav-item' href='#' onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                    </div>
                    <div className='cart'>
                        <a href='#'>
                            <img className='cart-img' alt='cart' src={cart}/>
                        </a>
                    </div>
                    <div className='phone'>
                        <div className='phone-holder'>
                            <div className='phone-img'>
                                <img alt='phone' src={phone}/>
                            </div>
                            <div className='phone-number'>
                                <a className='phone-number-link' href='#'>
                                    +375-25-519-84-74
                                </a>
                            </div>
                        </div>
                        <div className='phone-text'>
                            Свяжитесь с нами для <br/>
                            бронирования
                        </div>
                    </div>
                    <div className='btn'>
                        <a className='button' href='#' onClick={bookTable}>ЗАКАЗ СТОЛИКА</a>
                    </div>
                </div>
                <div className='header-down'>
                    <div className='header-title'>
                        Добро пожаловать в
                        <div className='header-subtitle'>
                            Наш ресторан
                        </div>
                        <div className='header-suptitle'>
                            ДОМ ЛУЧШЕЙ ЕДЫ
                        </div>
                        <div className='header-down-btn'>
                            <Link className='header-down-button' to={'/menu'}>МЕНЮ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <BookTableModal modal={modal}
                            setModal={setModal}
                            setRegistrationModal={setRegistrationModal}
                            authContext={authContext}
            />
            <LoginModal modal={loginModal}
                        setModal={setLoginModal}
                        setRegistrationModal={setRegistrationModal}
                        authContext={authContext}
            />
            <RegistrationModal modal={registrationModal}
                               setModal={setRegistrationModal}
                               setLoginModal={setLoginModal}
            />
        </div>
    );
};

export default Navbar;