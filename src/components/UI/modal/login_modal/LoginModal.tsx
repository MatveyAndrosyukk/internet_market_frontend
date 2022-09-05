import React, {FC, useContext, useEffect, useState} from 'react';
// @ts-ignore
import classes from './LoginModal.module.css';
import Modal from "../Modal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import {IUser} from "../../../../types/types";
import {useInput} from "../../../../hooks/useInput";

interface LoginModalProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
}

const LoginModal:FC<LoginModalProps> = ({modal, setModal, setRegistrationModal}) => {
    const {setIsAuth, users, setUser} = useContext<GlobalContextValues>(GlobalContext)
    const [areBadCredentials, setAreBadCredentials] = useState<boolean>(false);

    const email = useInput('', {isEmpty: true, isEmail: ''})
    const password = useInput('', {isEmpty: true})

    const openRegistrationModal = () => {
        setRegistrationModal(true)
        setModal(false)
    }

    const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        let user:(IUser | undefined) = users.find(user => user.email === email.value)

        if (typeof user === 'object'){
            if (user.password == password.value){
                setIsAuth(true)

                if (user.roles.find(role => role.name === 'ADMIN')) localStorage.setItem('ADMIN', 'ADMIN')
                localStorage.setItem('auth', 'true')

                setModal(false)
                setAreBadCredentials(false)
                setUser(user)
            }else {
                setAreBadCredentials(true)
            }
        }else {
            setAreBadCredentials(true)
        }
    }

    return (
        <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
            <div className={classes.text}>
                Log <span> in</span>
            </div>
            <form action='#'>
                <div className={classes.data}>
                    {areBadCredentials
                        ? <div className={classes.bad_credentials}>Неверный логин или пароль</div>
                        : <div className={[classes.bad_credentials, classes.hidden].join(' ')}>Неверный логин или пароль!</div>}
                    <div className={(email.isDirty && (email.isEmpty || email.emailError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите email</label>
                    <input type='text' value={email.value}
                           onChange={e => email.onChange(e)}
                           onBlur={e => email.onBlur(e)}
                           />
                </div>
                <div className={classes.data}>
                    <div className={(password.isDirty && (password.isEmpty))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите пароль</label>
                    <input type='password' value={password.value}
                           onChange={e => password.onChange(e)}
                           onBlur={e => password.onBlur(e)}
                    />
                </div>
                <div className={classes.button_block}>
                    <div className={classes.inner}>

                    </div>
                    <button disabled={!email.isInputValid || !password.isInputValid}
                            type='submit' onClick={e => logIn(e)}>
                        Войти
                    </button>
                </div>
                <div className={classes.signup_link}>
                    Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;