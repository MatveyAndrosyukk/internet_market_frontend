import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import logo from '../../../../static/images/logo.png';
// @ts-ignore
import cart from '../../../../static/images/cart.png';
// @ts-ignore
import phone from '../../../../static/images/phone.png';
import BookTableModal from "../../../UI/modal/book-table-modal/BookTableModal";
import LoginModal from "../../../UI/modal/login-modal/LoginModal";
import RegistrationModal from "../../../UI/modal/registration-modal/RegistrationModal";
import {Link} from "react-router-dom";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import AddDishModal from "../../../UI/modal/add_dish_modal/AddDishModal";

interface NavbarProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal: boolean,
    setRegistrationModal: React.Dispatch<boolean>
}
const Navbar:FC<NavbarProps> = ({modal, setModal, registrationModal, setRegistrationModal}) => {
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [addDishModal, setAddDishModal] = useState<boolean>(false)
    const {isAuth, setIsAuth} = useContext<GlobalContextValues>(GlobalContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    const bookTable = () => {
        if (isAuth){
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
                        <a className='nav-item' href='#menu'>МЕНЮ</a>
                        <a className='nav-item' href='#hist'>О НАС</a>
                        {isAuth
                        ? <a className='nav-item' href='#' onClick={logout}>ВЫЙТИ</a>
                        : <a className='nav-item' href='#' onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                    </div>
                    <div className='cart'>
                        <Link to={'/cart'}>
                            <img className='cart-img' alt='cart' src={cart}/>
                        </Link>
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
                        <a className='button' onClick={bookTable}>ЗАКАЗ СТОЛИКА</a>
                    </div>
                    <div className='header-down-btn'>
                        <a className='header-down-button' onClick={() => setAddDishModal(true)}>ДОБАВИТЬ</a>
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
            />
            <LoginModal modal={loginModal}
                        setModal={setLoginModal}
                        setRegistrationModal={setRegistrationModal}
            />
            <RegistrationModal modal={registrationModal}
                               setModal={setRegistrationModal}
                               setLoginModal={setLoginModal}
            />
            <AddDishModal modal={addDishModal} setModal={setAddDishModal}/>
        </div>
    );
};

export default Navbar;