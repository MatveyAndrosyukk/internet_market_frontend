import React, {FC} from 'react';
import Modal from "../Modal";
import './BookTableModal.css';
import {AuthContextValues} from '../../../../context/context'

interface BookTableModalProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
    authContext: AuthContextValues | null
}
const BookTableModal:FC<BookTableModalProps> = ({modal, setModal, setRegistrationModal, authContext}) => {
    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }
    const bookTable = () => {
      if (!authContext?.isAuth){

      }
    }
    return (
        <Modal active={modal} setActive={setModal}>
            <div className='text'>
                Заказать <span> столик</span>
            </div>
            <form action='#'>
                <div className='data'>
                    <label>Укажите ваше имя</label>
                    <input type='text' required/>
                </div>
                <div className='data'>
                    <label>Укажите свой номер телефона <span>(+375255198474)</span></label>
                    <input type='tel' required pattern="^\+375\d{9}$"/>
                </div>
                <div className='data'>
                    <label>Сколько будет человек?</label>
                    <input type='text' required/>
                </div>
                <div className='data'>
                    <label>На какое число хотите заказать столик?</label>
                    <input type='date' required/>
                </div>
                <div className='data'>
                    <label>На какое время хотите заказать столик?</label>
                    <input type='time' required/>
                </div>
                <div className='btn'>
                    <div className='inner'>

                    </div>
                    <button type='submit' onClick={bookTable}>Заказать</button>
                </div>
                <div className='signup-link'>
                    Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                </div>
            </form>
        </Modal>
    );
};

export default BookTableModal;