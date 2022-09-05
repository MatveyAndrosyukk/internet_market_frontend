import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import logo from '../../../../static/images/logo.png';
// @ts-ignore
import cart from '../../../../static/images/cart.png';
// @ts-ignore
import phone from '../../../../static/images/phone.png';
// @ts-ignore
import burger_menu from '../../../../static/images/burger.png';
import BookTableModal from "../../../UI/modal/book_table_modal/BookTableModal";
import LoginModal from "../../../UI/modal/login_modal/LoginModal";
import RegistrationModal from "../../../UI/modal/registration_modal/RegistrationModal";
import {Link} from "react-router-dom";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import AddDishModal from "../../../UI/modal/add_dish_modal/AddDishModal";
// @ts-ignore
import classes from "./GreetingNavbar.module.css"
import NavButton from "../../../UI/button/nav_button/NavButton";
import MenuBurger from "../../../UI/burger_menu/MenuBurger";

interface GreetingNavbarProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal: boolean,
    setRegistrationModal: React.Dispatch<boolean>
}

const GreetingNavbar: FC<GreetingNavbarProps> = ({modal, setModal, registrationModal, setRegistrationModal}) => {
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isBurgerSlide, setBurgerSlide] = useState<boolean>(false)
    const [addDishModal, setAddDishModal] = useState<boolean>(false)
    const {isAuth, setIsAuth, user, setUser} = useContext<GlobalContextValues>(GlobalContext)

    const logout = () => {
        console.log(user)
        setIsAuth(false)
        localStorage.removeItem('auth')
        localStorage.removeItem('ADMIN')
        setUser(null)
    }

    const bookTable = () => {
        if (isAuth) {
            setModal(true)
        } else {
            setRegistrationModal(true)
        }
    }

    return (
        <div className={classes.header}>
            <div className='container'>
                <div className={classes.line}>
                    <div className={classes.logo}>
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
                    <div className={classes.buttons}>
                        <div className={classes.book_table_button}>
                            <NavButton onClick={bookTable}>
                                ЗАКАЗ СТОЛИКА
                            </NavButton>
                        </div>
                        {localStorage.getItem('ADMIN')
                            ? <NavButton onClick={() => setAddDishModal(true)}>ДОБАВИТЬ</NavButton>
                            : <span/>}
                    </div>

                    <div className={classes.burger_menu}>
                        <MenuBurger
                            isBurgerSlide={isBurgerSlide}
                            setBurgerSlide={setBurgerSlide}
                            bookTable={bookTable}
                            setAddDishModal={setAddDishModal}
                            isAuth={isAuth}
                            logout={logout}
                            setLoginModal={setLoginModal}>
                            <div className={classes.nav_items}>
                                <div className={classes.nav_item}>
                                    <a className={classes.nav_item} href='#menu'>МЕНЮ</a>
                                </div>
                                <div className={classes.nav_item}>
                                    <Link className={classes.nav_item} to={'/cart'}>КОРЗИНА</Link>
                                </div>
                            </div>
                        </MenuBurger>
                    </div>
                </div>
                <div className={classes.header_down}>
                    <div className={classes.title}>
                        Добро пожаловать в
                        <div className={classes.subtitle}>
                            Наш ресторан
                        </div>
                        <div className={classes.suptitle}>
                            ДОМ ЛУЧШЕЙ ЕДЫ
                        </div>
                        <div className={classes.header_down_button_block}>
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

export default GreetingNavbar;