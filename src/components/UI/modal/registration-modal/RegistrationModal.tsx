import React, {FC} from 'react';
import Modal from "../Modal";

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
            <div className='text'>
                Sing <span> up</span>
            </div>
            <form action='#'>
                <div className='data'>
                    <label>Введите имя</label>
                    <input type='text' required/>
                </div>
                <div className='data'>
                    <label>Введите email</label>
                    <input type='email' required/>
                </div>
                <div className='data'>
                    <label>Введите свой номер телефона</label>
                    <input type='tel' required/>
                </div>
                <div className='data'>
                    <label>Введите пароль</label>
                    <input type='password' required/>
                </div>
                <div className='btn'>
                    <div className='inner'>

                    </div>
                    <button type='submit'>Войти</button>
                </div>
                <div className='signup-link'>
                    Already a member? <a href='#' onClick={openLoginModal}>Login now</a>
                </div>
            </form>
        </Modal>
    );
};

export default RegistrationModal;