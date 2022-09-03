import React, {FC, useContext, useState} from 'react';
import Modal from "../Modal";
// @ts-ignore
import classes from './RegistrationModal.module.css';
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import {IUser} from "../../../../types/types";
import {rolesMock} from "../../../../data/store";

interface RegistrationModalProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setLoginModal: React.Dispatch<boolean>
}
const RegistrationModal:FC<RegistrationModalProps> = ({modal, setModal, setLoginModal}) => {
    const [user, setUser] = useState<IUser>({id: 0, name: '', email: '', phone: '', password: '', roles: [rolesMock[0]]})
    const {users, setUsers} = useContext<GlobalContextValues>(GlobalContext)

    const registerUser = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setUser({...user, id: Date.now()})
        setUsers([...users, user])
        setModal(false)
        setLoginModal(true)
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
                <div className={classes.data}>
                    <label>Введите имя</label>
                    <input type='text' value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                </div>
                <div className={classes.data}>
                    <label>Введите email</label>
                    <input type='email' value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                </div>
                <div className={classes.data}>
                    <label>Введите свой номер телефона</label>
                    <input type='tel' value={user.phone} onChange={e => setUser({...user, phone: e.target.value})}/>
                </div>
                <div className={classes.data}>
                    <label>Введите пароль</label>
                    <input type='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
                </div>
                <div className={classes.button_block}>
                    <div className={classes.inner}>

                    </div>
                    <button type='submit' onClick={e => registerUser(e)}>Зарегистрироваться</button>
                </div>
                <div className={classes.signup_link}>
                    Already a member? <a href='#' onClick={openLoginModal}>Login now</a>
                </div>
            </form>
        </Modal>
    );
};

export default RegistrationModal;