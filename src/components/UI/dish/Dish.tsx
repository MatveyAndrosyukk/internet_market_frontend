import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import manu_page_hamburger from "../../../static/images/manu_page_gamburger.png";
// @ts-ignore
import classes from "./Dish.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IDish} from "../../../types/dish";
import {GlobalContext, GlobalContextValues} from "../../../context/context";
import RegistrationModal from "../modal/registration_modal/RegistrationModal";
import LoginModal from "../modal/login_modal/LoginModal";
import {useUserActions} from "../../../hooks/use_actions/useUserActions";

interface DishItemProps{
    dish: IDish
}
const Dish:FC<DishItemProps> = ({dish}) => {
    const {updateUserCart} = useUserActions()
    const {user} = useTypedSelector(state => state.user)
    const {isAuth} = useContext<GlobalContextValues>(GlobalContext)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);

    const addToCart = () => {
        if (isAuth) {
            updateUserCart(dish.id, user)

        }else {
            setLoginModal(true)
        }
    }

    const deleteFromCart = () => {
        updateUserCart(dish.id, user)
    }

    return (
        <div>
            <div className={classes.dish}>
                <div className={classes.dish_image_block}>
                    <img className={classes.dish_image} src={dish?.image}/>
                    <div className={classes.dish_price}>
                        {dish?.price} р.
                    </div>
                </div>
                <div className={classes.dish_title}>
                    {dish?.title}
                </div>
                <div className={classes.dish_description}>
                    {dish?.description}
                </div>
                <div className={classes.dish_button_block}>
                    {user?.cart.find(cartItem => cartItem?.id === dish?.id)
                        ? <a className={classes.dish_button} onClick={() => deleteFromCart()}>УБРАТЬ</a>
                        : <a className={classes.dish_button} onClick={() => addToCart()}>ДОБАВИТЬ</a>}
                </div>
            </div>
            <RegistrationModal
                modal={registrationModal}
                setModal={setRegistrationModal}
                setLoginModal={setLoginModal}
            />
            <LoginModal
                modal={loginModal}
                setModal={setLoginModal}
                setRegistrationModal={setRegistrationModal}
            />
        </div>
    );
};

export default Dish;