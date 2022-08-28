import React, {FC, useState} from 'react';
import Modal from "../Modal";
import {AuthContextValues} from "../../../../context/context";

interface LoginModalProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
    authContext: AuthContextValues | null
}
const LoginModal:FC<LoginModalProps> = ({modal, setModal, setRegistrationModal, authContext}) => {
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [areBadCredentials, setAreBadCredentials] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>('user')
    const [userPassword, setUserPassword] = useState<string>('user')
    const openRegistrationModal = () => {
        setRegistrationModal(true)
        setModal(false)
    }

    const logIn = () => {
        if (emailValue == userEmail){
            if (passwordValue == userPassword){
                authContext?.setIsAuth(true)
                setModal(false)
                setAreBadCredentials(false)
            }else {
                setAreBadCredentials(true)
            }
        }else {
            setAreBadCredentials(true)
        }
    }

    return (
        <Modal active={modal} setActive={setModal}>
            <div className='text'>
                Log <span> in</span>
            </div>
            <form action='#'>
                <div className='data'>
                    {areBadCredentials
                        ? <div className='bad-credentials'>Неверный логин или пароль</div>
                        : <div className='bad-credentials hidden'>Неверный логин или пароль!</div>}
                    <label>Введите email</label>
                    <input type='text' value={emailValue} onChange={e => setEmailValue(e.target.value)} required/>
                </div>
                <div className='data'>
                    <label>Введите пароль</label>
                    <input type='password' value={passwordValue} onChange={e => setPasswordValue(e.target.value)} required/>
                </div>
                <div className='btn'>
                    <div className='inner'>

                    </div>
                    <button type='submit' onClick={logIn}>Войти</button>
                </div>
                <div className='signup-link'>
                    Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;