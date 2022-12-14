import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import classes from "./CartBody.module.css"
import CartBodyDish from "./dish/CartBodyDish";
import OrderDishModal from "../../../UI/modal/order_dish_modal/OrderModal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import LoginModal from "../../../UI/modal/login_modal/LoginModal";
import RegistrationModal from "../../../UI/modal/registration_modal/RegistrationModal";
import InfoModal from "../../../UI/modal/info_modal/InfoModal";
import NavButton from "../../../UI/button/nav_button/NavButton";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from 'react-redux';
import {useUserActions} from "../../../../hooks/use_actions/useUserActions";

export interface ITotalInfo {
    price: number,
    count: number
}

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
    }) => {
    const {isAuth} = useContext<GlobalContextValues>(GlobalContext)
    const {user} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    const {updateUserCart} = useUserActions()
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const [totalInfo, setTotalInfo] = useState<ITotalInfo>({price: 0, count: 0})

    useEffect(() => {
        let totalPrice = countTotalPrice();
        let totalCount = countTotalCount();
        setTotalInfo({price: totalPrice, count: totalCount})
    }, [user])

    const orderDish = () => {
        if (user?.cart.length) {
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

    const deleteDishFromCart = (dishId: number | undefined): void => {
        updateUserCart(dishId, user)
    }

    const countTotalPrice = (): number => {
        let sum = 0
        user?.cart.forEach(cartItem => sum += cartItem.totalPrice)
        return sum
    }

    const countTotalCount = (): number => {
        let sum = 0
        user?.cart.forEach(cartItem => sum += cartItem.count)
        return sum
    }

    return (
        <div className={classes.cart_body}>
            <div className='container'>
                <div className={classes.content}>
                    <div className={classes.first_line}>
                        <div className={classes.cart_info}>
                            <div className={classes.total_dishes}>
                                ?????????? ??????????????: <span>{totalInfo.count} ????.</span>
                            </div>
                            <div className={classes.total_price}>
                                ?????????? ??????????: <span>{totalInfo.price} ??????.</span>
                            </div>
                        </div>
                        <div className={classes.button_block}>
                            <NavButton onClick={orderDish}>
                                ?????????????? ??????????
                            </NavButton>
                        </div>
                    </div>
                    <div className={classes.content_title}>
                        ??????????
                    </div>
                    <div className={classes.dishes}>
                        {user?.cart
                                && user.cart.map(cartItem =>
                                    <CartBodyDish totalInfo={totalInfo} setTotalInfo={setTotalInfo} dish={cartItem}
                                                  deleteDish={deleteDishFromCart}/>)
                        }
                    </div>
                </div>
            </div>
            <OrderDishModal totalInfo={totalInfo}
                            setTotalInfo={setTotalInfo}
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
                <label>???? ???? ???????????????? ?? <span>??????????????</span> ????????????, ?????? ???????????? ?????? ????????????????????.</label>
            </InfoModal>
        </div>
    );
};

export default CartBody;