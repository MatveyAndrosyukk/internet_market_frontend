import React, {ChangeEvent, FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import classes from "./OrderModal.module.css"
import Modal from "../Modal";
import {ITotalInfo} from "../../../../types/types";
import InfoModal from "../info_modal/InfoModal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import {useInput} from "../../../../hooks/useInput";

interface OrderModal {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
    totalInfo: ITotalInfo,
}

const OrderDishModal: FC<OrderModal> = (
    {
        modal,
        setModal,
        setRegistrationModal,
        totalInfo
    }
) => {
    const address = useInput('', {isEmpty: true})
    const cardNumber = useInput('', {isEmpty: true, isCard: ''})
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }
    const {setCart} = useContext<GlobalContextValues>(GlobalContext);

    const orderDishes = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        setModal(false)
        setInfoModal(true)
        setTimeout(() => {
            setInfoModal(false)
            setCart([])
        }, 3000)
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
                               onBlur={e => address.onBlur(e)}/>
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
                               onBlur={e => cardNumber.onBlur(e)}/>
                    </div>
                    <div className={classes.button_block}>
                        <div className={classes.inner}/>
                        <button disabled={!address.isInputValid || !cardNumber.isInputValid}
                            type='submit' onClick={e => orderDishes(e)}>Доставить</button>
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