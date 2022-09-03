import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import classes from "./CartBody.module.css"
import {IDish, ITotalInfo} from "../../../../types/types";
import CartBodyDish from "./dish/CartBodyDish";
import OrderDishModal from "../../../UI/modal/order_dish_modal/OrderModal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import LoginModal from "../../../UI/modal/login_modal/LoginModal";
import RegistrationModal from "../../../UI/modal/registration_modal/RegistrationModal";
import InfoModal from "../../../UI/modal/info_modal/InfoModal";
import NavButton from "../../../UI/button/nav_button/NavButton";

interface CartBodyProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal: boolean,
    setRegistrationModal: React.Dispatch<boolean>
}

const CartBody: FC<CartBodyProps> = (
    {
        modal,
        setModal,
        registrationModal,
        setRegistrationModal
    }
) => {
    const {isAuth, cart, setCart} = useContext<GlobalContextValues>(GlobalContext)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const [totalInfo, setTotalInfo] = useState<ITotalInfo>({price: 0, count: 0})

    useEffect(() => {
        let totalPrice = countTotalPrice();
        setTotalInfo({price: totalPrice, count: cart.length})
    }, [])

    const countTotalPrice = (): number => {
        let sum = 0
        cart.forEach(cartItem => sum += cartItem.price)
        return sum
    }

    const orderDish = () => {
        if (cart.length) {
            if (isAuth) {
                setModal(true)
            } else {
                setRegistrationModal(true)
            }
        } else {
            setInfoModal(true)
            setTimeout(() => {
                setInfoModal(false)
            }, 2000)
        }
    }

    const deleteFromCart = (dish: IDish) => {
        setCart(cart.filter(cartDish => cartDish.id != dish.id))
    }

    return (
        <div className={classes.cart_body}>
            <div className='container'>
                <div className={classes.content}>
                    <div className={classes.first_line}>
                        <div className={classes.cart_info}>
                            <div className={classes.total_dishes}>
                                Всего товаров: <span>{totalInfo.count} шт.</span>
                            </div>
                            <div className={classes.total_price}>
                                Общая сумма: <span>{totalInfo.price} руб.</span>
                            </div>
                        </div>
                        <NavButton onClick={orderDish}>
                            СДЕЛАТЬ ЗАКАЗ
                        </NavButton>
                    </div>
                    <div className={classes.content_title}>
                        Блюда
                    </div>
                    <div className={classes.dishes}>
                        {cart.map(dish =>
                            <CartBodyDish totalInfo={totalInfo} setTotalInfo={setTotalInfo} dish={dish}
                                          deleteDish={deleteFromCart}/>
                        )}
                    </div>
                </div>
            </div>
            <OrderDishModal totalInfo={totalInfo}
                            modal={modal}
                            setModal={setModal}
                            setRegistrationModal={setRegistrationModal}
            />
            <LoginModal modal={loginModal}
                        setModal={setLoginModal}
                        setRegistrationModal={setRegistrationModal}
            />
            <RegistrationModal modal={registrationModal} setModal={setRegistrationModal} setLoginModal={setLoginModal}/>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>Вы не добавили в <span>корзину</span> ничего, нам нечего вам доставлять.</label>
            </InfoModal>
        </div>
    );
};

export default CartBody;