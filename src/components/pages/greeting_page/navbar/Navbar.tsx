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
// @ts-ignore
import classes from "./Navbar.module.css"

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
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.header_line}>
                    <div className={classes.header_logo}>
                        <img alt='Logo' src={logo}/>
                    </div>
                    <div className={classes.nav}>
                        <Link className={classes.nav_item} to={'/greetings'}>ГЛАВНАЯ</Link>
                        <a className={classes.nav_item} href='#menu'>МЕНЮ</a>
                        <a className={classes.nav_item} href='#hist'>О НАС</a>
                        {isAuth
                        ? <a className={classes.nav_item} href='#' onClick={logout}>ВЫЙТИ</a>
                        : <a className={classes.nav_item} href='#' onClick={() => setLoginModal(true)}>ВОЙТИ</a>}
                    </div>
                    <div className={classes.cart}>
                        <Link to={'/cart'}>
                            <img className={classes.cart_img} alt='cart' src={cart}/>
                        </Link>
                    </div>
                    <div className={classes.phone}>
                        <div className={classes.phone_holder}>
                            <div className={classes.phone_img}>
                                <img alt='phone' src={phone}/>
                            </div>
                            <div className={classes.phone_number}>
                                <a className={classes.phone_number_link} href='#'>
                                    +375-25-519-84-74
                                </a>
                            </div>
                        </div>
                        <div className={classes.phone_text}>
                            Свяжитесь с нами для <br/>
                            бронирования
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <a className={classes.button} onClick={bookTable}>ЗАКАЗ СТОЛИКА</a>
                    </div>
                    <div className={classes.header_down_btn}>
                        <a className={classes.header_down_button} onClick={() => setAddDishModal(true)}>ДОБАВИТЬ</a>
                    </div>
                </div>
                <div className={classes.header_down}>
                    <div className={classes.header_title}>
                        Добро пожаловать в
                        <div className={classes.header_subtitle}>
                            Наш ресторан
                        </div>
                        <div className={classes.header_suptitle}>
                            ДОМ ЛУЧШЕЙ ЕДЫ
                        </div>
                        <div className={classes.header_down_btn}>
                            <Link className={classes.header_down_button} to={'/menu'}>МЕНЮ</Link>
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