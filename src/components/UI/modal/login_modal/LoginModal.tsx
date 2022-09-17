import React, {FC, useContext, useState} from 'react';
// @ts-ignore
import classes from './LoginModal.module.css';
import Modal from "../Modal";
import {GlobalContext, GlobalContextValues} from "../../../../context/context";
import {useInput} from "../../../../hooks/useInput";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useUserActions} from "../../../../hooks/use_actions/useUserActions";
import {IUser} from "../../../../types/user";

interface LoginModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>,
}

const LoginModal: FC<LoginModalProps> = (
    {
        modal,
        setModal,
        setRegistrationModal
    }) => {
    const {user} = useTypedSelector(state => state.user)
    const {login} = useUserActions()
    const {setIsAuth} = useContext<GlobalContextValues>(GlobalContext)
    const [areBadCredentials, setAreBadCredentials] = useState<boolean>(false);

    const email = useInput('', {isEmpty: true, isEmail: ''})
    const password = useInput('', {isEmpty: true})

    const openRegistrationModal = () => {
        setRegistrationModal(true)
        setModal(false)
    }

    const logIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        let principal = await login(email.value, password.value)
        console.log(principal)

        if (user !== null){
            setIsAuth(true)

            localStorage.setItem('auth', 'true')
            user.roles.includes('ADMIN') && localStorage.setItem('ADMIN', 'ADMIN')
            localStorage.setItem('user_email', user.email)

            setModal(false)

            setInitValues()
        }else {
            setAreBadCredentials(true)
        }
    }

    const setInitValues = (): void => {
        email.setValue('')
        email.setDirty(false)
        password.setValue('')
        password.setDirty(false)
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
                        : <div className={[classes.bad_credentials, classes.hidden].join(' ')}>Неверный логин или
                            пароль!</div>}
                    <div className={(email.isDirty && (email.isEmpty || email.emailError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        Поле заполнено неверно
                    </div>
                    <label>Введите email</label>
                    <input type='text' value={email.value}
                           onChange={e => email.onChange(e)}
                           onBlur={() => email.onBlur()}
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
                           onBlur={() => password.onBlur()}
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