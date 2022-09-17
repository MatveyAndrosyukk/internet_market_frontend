import React, {FC, useState} from 'react';
// @ts-ignore
import classes from "./OrderModal.module.css"
import Modal from "../Modal";
import InfoModal from "../info_modal/InfoModal";
import {useInput} from "../../../../hooks/useInput";
import {useDispatch} from 'react-redux';
import {ITotalInfo} from "../../../pages/cart_page/body/CartBody";

interface OrderModal {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
    totalInfo: ITotalInfo,
    setTotalInfo: React.Dispatch<ITotalInfo>
}

const OrderDishModal: FC<OrderModal> = (
    {
        modal,
        setModal,
        setRegistrationModal,
        totalInfo,
        setTotalInfo
    }
) => {
    const dispatch = useDispatch()
    const [infoModal, setInfoModal] = useState<boolean>(false)

    const address = useInput('', {isEmpty: true})
    const cardNumber = useInput('', {isEmpty: true, isCard: ''})

    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }

    // const orderDishes = (e: React.FormEvent<HTMLButtonElement>): void => {
    //     e.preventDefault();
    //
    //     setModal(false)
    //     setInfoModal(true)
    //     setTimeout(() => {
    //         setInfoModal(false)
    //         dispatch(cleanCart())
    //         setTotalInfo({price: 0, count: 0})
    //         setInitValues()
    //     }, 3000)
    // }

    const setInitValues = ():void => {
        address.setValue('')
        address.setDirty(false)
        cardNumber.setValue('')
        cardNumber.setDirty(false)
    }

    return (
        <div>
            <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
                <div className={classes.text}>
                    Сделать <span> заказ</span>
                </div>
                <form action='#'>
                    <div className={[classes.data, classes.first_data].join(' ')}>
                        <div>
                            <label>Сумма заказа: <span>{totalInfo.price} руб.</span></label>
                        </div>
                        <div>
                            <label>Всего блюд: <span>{totalInfo.count} шт.</span></label>
                        </div>
                    </div>
                    <div className={[classes.data, classes.second_data].join(' ')}>
                        <div className={(address.isDirty && (address.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>Укажите ваш адрес</label>
                        <input type='text' value={address.value}
                               onChange={e => address.onChange(e)}
                               onBlur={() => address.onBlur()}/>
                    </div>
                    <div className={[classes.data, classes.last_data].join(' ')}>
                        <div className={(cardNumber.isDirty && (cardNumber.isEmpty || cardNumber.cardError))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>Укажите номер вашей карточки <div
                            className={classes.card_code}>(xxxx-xxxx-xxxx-xxxx)</div>
                        </label>
                        <input type='text' value={cardNumber.value}
                               onChange={e => cardNumber.onChangeCard(e)}
                               onBlur={() => cardNumber.onBlur()}/>
                    </div>
                    <div className={classes.button_block}>
                        <div className={classes.inner}/>
                        {/*<button disabled={!address.isInputValid || !cardNumber.isInputValid}*/}
                        {/*    type='submit' onClick={e => orderDishes(e)}>Доставить</button>*/}
                    </div>
                    <div className={classes.signup_link}>
                        Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                    </div>
                </form>
            </Modal>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>Ваш заказ принят и будет доставлен через <span>30 минут</span> </label>
            </InfoModal>
        </div>
    );
};

export default OrderDishModal;