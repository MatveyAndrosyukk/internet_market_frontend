import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import logo from '../../../../static/images/logo.png';
// @ts-ignore
import cart from '../../../../static/images/cart.png';
// @ts-ignore
import phone from '../../../../static/images/phone.png';
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
import {useDispatch} from "react-redux";
import {setUserReducer} from "../../../../redux/reducers/userReducer";

interface GreetingNavbarProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal: boolean,
    setRegistrationModal: React.Dispatch<boolean>
}

const GreetingNavbar: FC<GreetingNavbarProps> = (
    {
        modal,
        setModal,
        registrationModal,
        setRegistrationModal
    }) => {
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isBurgerSlide, setBurgerSlide] = useState<boolean>(false)
    const [addDishModal, setAddDishModal] = useState<boolean>(false)
    const {isAuth, setIsAuth} = useContext<GlobalContextValues>(GlobalContext)
    const dispatch = useDispatch()

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        localStorage.removeItem('ADMIN')
        localStorage.removeItem('user_email')
        dispatch(setUserReducer(null))
    }

    const bookTable = () => {
        if (isAuth) {
            setModal(true)
        } else {
            setLoginModal(true)
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
                        <Link className={classes.nav_item} to={'/greetings'}>??????????????</Link>
                        <a className={classes.nav_item} href='#menu'>????????</a>
                        <a className={classes.nav_item} href='#hist'>?? ??????</a>
                        {isAuth
                            ? <a className={classes.nav_item} href='#' onClick={logout}>??????????</a>
                            : <a className={classes.nav_item} href='#' onClick={() => setLoginModal(true)}>??????????</a>}
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
                            ?????????????????? ?? ???????? ?????? <br/>
                            ????????????????????????
                        </div>
                    </div>
                    <div className={classes.buttons}>
                        <div className={classes.book_table_button}>
                            <NavButton onClick={bookTable}>
                                ?????????? ??????????????
                            </NavButton>
                        </div>
                        {localStorage.getItem('ADMIN')
                            ? <NavButton onClick={() => setAddDishModal(true)}>????????????????</NavButton>
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
                                    <Link className={classes.nav_item} to={'/menu'}>????????</Link>
                                </div>
                                <div className={classes.nav_item}>
                                    <Link className={classes.nav_item} to={'/cart'}>??????????????</Link>
                                </div>
                            </div>
                        </MenuBurger>
                    </div>
                </div>
                <div className={classes.header_down}>
                    <div className={classes.title}>
                        ?????????? ???????????????????? ??
                        <div className={classes.subtitle}>
                            ?????? ????????????????
                        </div>
                        <div className={classes.suptitle}>
                            ?????? ???????????? ??????
                        </div>
                        <div className={classes.header_down_button_block}>
                            <Link className={classes.header_down_button} to={'/menu'}>????????</Link>
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