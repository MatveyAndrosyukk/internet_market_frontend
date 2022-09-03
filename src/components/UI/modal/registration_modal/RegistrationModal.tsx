import React, {FC} from 'react';
import Modal from "../Modal";
// @ts-ignore
import classes from './RegistrationModal.module.css';

interface RegistrationModalProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setLoginModal: React.Dispatch<boolean>
}
const RegistrationModal:FC<RegistrationModalProps> = ({modal, setModal, setLoginModal}) => {
    const openLoginModal = () => {
      setModal(false)
        setLoginModal(true)
    }
    return (
        <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
            <div className={classes.text}>
                Sing <span> up</span>
            </div>
            <form action='#'>
                <div className={classes.data}>
                    <label>Введите имя</label>
                    <input type='text' required/>
                </div>
                <div className={classes.data}>
                    <label>Введите email</label>
                    <input type='email' required/>
                </div>
                <div className={classes.data}>
                    <label>Введите свой номер телефона</label>
                    <input type='tel' required/>
                </div>
                <div className={classes.data}>
                    <label>Введите пароль</label>
                    <input type='password' required/>
                </div>
                <div className={classes.button_block}>
                    <div className={classes.inner}>

                    </div>
                    <button type='submit'>Зарегистрироваться</button>
                </div>
                <div className={classes.signup_link}>
                    Already a member? <a href='#' onClick={openLoginModal}>Login now</a>
                </div>
            </form>
        </Modal>
    );
};

export default RegistrationModal;