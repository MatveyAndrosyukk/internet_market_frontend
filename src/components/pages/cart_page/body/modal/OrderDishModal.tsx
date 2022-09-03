import React, {ChangeEvent, FC, useContext, useState} from 'react';
import Modal from "../../../../UI/modal/Modal";
import {IDish, ITotalInfo} from "../../../../../types/types";
import InfoModal from "../../../../UI/modal/info-modal/InfoModal";
import {GlobalContext, GlobalContextValues} from "../../../../../context/context";

interface OrderDishModal {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
    totalInfo: ITotalInfo,
}

const OrderDishModal: FC<OrderDishModal> = (
    {
        modal,
        setModal,
        setRegistrationModal,
        totalInfo
    }
) => {
    const [address, setAddress] = useState<string>('')
    const [cardNumber, setCardNumber] = useState<string>('')
    const [infoModal, setInfoModal] = useState<boolean>(false)
    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }
    const {setCart} = useContext<GlobalContextValues>(GlobalContext);

    const inputCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
        let cardCode = e.target.value.replaceAll(' ', '-').replace(/[^\d|-]/, '').substring(0, 19)
        setCardNumber(cardCode)
    }

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
                <div className='text'>
                    Сделать <span> заказ</span>
                </div>
                <form action='#'>
                    <div className='data'>
                        <div>
                            <label>Сумма заказа: <span>{totalInfo.price} руб.</span></label>
                        </div>
                        <div>
                            <label>Всего блюд: <span>{totalInfo.count} шт.</span></label>
                        </div>
                    </div>
                    <div className='data'>
                        <label>Укажите ваш адрес</label>
                        <input type='text' value={address} onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className='data'>
                        <label>Укажите номер вашей карточки <div className='card-code'>(xxxx-xxxx-xxxx-xxxx)</div>
                        </label>
                        <input type='text' value={cardNumber} onChange={inputCardNumber}/>
                    </div>
                    <div className='btn'>
                        <div className='inner'>

                        </div>
                        <button type='submit' onClick={e => orderDishes(e)}>Доставить</button>
                    </div>
                    <div className='signup-link'>
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