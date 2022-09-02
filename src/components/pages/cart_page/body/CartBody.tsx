import React, {FC, useContext, useState} from 'react';
import {IDish} from "../../../../types/types";
import CartBodyDish from "./dish/CartBodyDish";
import OrderDishModal from "./modal/OrderDishModal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import LoginModal from "../../../UI/modal/login-modal/LoginModal";
import RegistrationModal from "../../../UI/modal/registration-modal/RegistrationModal";
import CartBodyTable from "./table/CartBodyTable";
import InfoModal from "../../../UI/modal/info-modal/InfoModal";

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
    const {isAuth, cart, setCart, tables} = useContext<GlobalContextValues>(GlobalContext)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [infoModal, setInfoModal] = useState<boolean>(false)

    const orderDish = () => {
        if (cart.length){
            if (isAuth) {
                setModal(true)
            } else {
                setRegistrationModal(true)
            }
        }else {
            setInfoModal(true)
            setTimeout(() => {
                setInfoModal(false)
            }, 2000)
        }
    }

    const deleteFromCart = (dish: IDish) => {
        setCart(cart.filter(cartDish => cartDish.id != dish.id))
    }

    const countCartDishes = (): number => {
        let sum: number = 0
        cart.forEach(dish => sum += dish.price)
        return sum
    }

    return (
        <div className='cart-body'>
            <div className='container'>
                <div className='cart-body-content'>
                    <div className='cart-body-content-first-line'>
                        <div className='cart-info'>
                            <div className='cart-body-content-total-dishes'>
                                Всего товаров: <span>{cart.length} шт.</span>
                            </div>
                            <div className='cart-body-content-total-price'>
                                Общая сумма: <span>{countCartDishes()} руб.</span>
                            </div>
                        </div>
                        <div className='menu-page-content-dish-button'>
                            <a className='menu-page-content-dish-btn' onClick={orderDish}>Сделать заказ</a>
                        </div>
                    </div>
                    <div className='cart-body-content-title'>
                        Блюда
                    </div>
                    <div className='dishes'>
                        {cart.map(dish =>
                            <CartBodyDish dish={dish} deleteDish={deleteFromCart}/>
                        )}
                    </div>
                </div>
            </div>
            <OrderDishModal cart={cart}
                            modal={modal}
                            setModal={setModal}
                            setRegistrationModal={setRegistrationModal}
            />
            <LoginModal modal={loginModal}
                        setModal={setLoginModal}
                        setRegistrationModal={setRegistrationModal}
            />
            <RegistrationModal modal={registrationModal} setModal={setRegistrationModal} setLoginModal={setLoginModal}/>
            <InfoModal  modal={infoModal} setModal={setInfoModal}>
                <label>Вы не добавили в <span>корзину</span> ничего, нам нечего вам доставлять.</label>
            </InfoModal>
        </div>
    );
};

export default CartBody;