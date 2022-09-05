import React, {FC, useContext, useState} from 'react';
import Modal from "../Modal";
// @ts-ignore
import classes from './RegistrationModal.module.css';
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import {IUser} from "../../../../types/types";
import {rolesMock} from "../../../../data/store";
import {useInput} from "../../../../hooks/useInput";

interface RegistrationModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setLoginModal: React.Dispatch<boolean>
}

const RegistrationModal: FC<RegistrationModalProps> = ({modal, setModal, setLoginModal}) => {
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: '',
        email: '',
        phone: '',
        password: '',
        roles: [rolesMock[0]]
    })
    const {users, setUsers} = useContext<GlobalContextValues>(GlobalContext)
    const [isUserExists, setUserExists] = useState<boolean>(false)

    const name = useInput('', {isEmpty: true})
    const email = useInput('', {isEmpty: true, isEmail: ''})
    const phone = useInput('', {isEmpty: true, isPhone: ''})
    const password = useInput('', {isEmpty: true})

    const registerUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        let findUserByEmail: (IUser | undefined) = users.find(user => user.email === email.value)

        if (typeof findUserByEmail === 'object') {
            setUserExists(true)
        } else {

            setUser({
                ...user,
                id: Date.now(),
                name: name.value,
                email: email.value,
                phone: phone.value,
                password: password.value
            })
            setUsers([...users, user])
            setModal(false)
            setLoginModal(true)
        }

    }

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
                <div className={isUserExists
                    ? classes.bad_credentials
                    : [classes.bad_credentials, classes.hidden].join(' ')}>
                    Этот электронный адрес почты уже зарегистрирован
                </div>
                <div className={classes.data}>
                    <div className={(name.isDirty && (name.isEmpty))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите имя</label>
                    <input type='text' value={name.value}
                           onChange={e => name.onChange(e)}
                           onBlur={e => name.onBlur(e)}/>
                </div>
                <div className={classes.data}>
                    <div className={(email.isDirty && (email.isEmpty || email.emailError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите email</label>
                    <input type='email' value={email.value}
                           onChange={e => email.onChange(e)}
                           onBlur={e => email.onBlur(e)}/>
                </div>
                <div className={classes.data}>
                    <div className={(phone.isDirty && (phone.isEmpty || phone.phoneError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите свой номер телефона</label>
                    <input type='tel' value={phone.value}
                           onChange={e => phone.onChange(e)}
                           onBlur={e => phone.onBlur(e)}/>
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
                           onBlur={e => password.onBlur(e)}/>
                </div>
                <div className={classes.button_block}>
                    <div className={classes.inner}>

                    </div>
                    <button disabled={!name.isInputValid || !email.isInputValid
                        || !phone.isInputValid || !password.isInputValid}
                            type='submit' onClick={e => registerUser(e)}>Зарегистрироваться
                    </button>
                </div>
                <div className={classes.signup_link}>
                    Already a member? <a href='#' onClick={openLoginModal}>Login now</a>
                </div>
            </form>
        </Modal>
    );
};

export default RegistrationModal;