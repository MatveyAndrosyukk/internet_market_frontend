import React, {useEffect, useState} from 'react';
import CartNavbar from "./navbar/CartNavbar";
// @ts-ignore
import classes from "./CartPage.module.css"
// @ts-ignore
import manu_page_hamburger from "../../../static/images/manu_page_gamburger.png";
import Footer from "../../UI/footer/Footer";
import CartBody from "./body/CartBody";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useUserActions} from "../../../hooks/use_actions/useUserActions";

const CartPage = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [orderDishModal, setOrderDishModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const {user} = useTypedSelector(state => state.user)
    // const {fetchUserByEmail} = useUserActions()
    //
    // useEffect(() => {
    //     let email = localStorage.getItem('user_email')
    //     email && fetchUserByEmail(email)
    // }, [])

    return (
        <div className={classes.cart_page}>
            <CartNavbar modal={modal}
                        setModal={setModal}
                        registrationModal={registrationModal}
                        setRegistrationModal={setRegistrationModal}
            />
            <CartBody modal={orderDishModal}
                      setModal={setOrderDishModal}
                      registrationModal={registrationModal}
                      setRegistrationModal={setRegistrationModal}/>
            <Footer
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}/>
        </div>
    );
};

export default CartPage;