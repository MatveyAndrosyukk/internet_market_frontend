import React, {FC, useState} from 'react';
import Modal from "../Modal";
// @ts-ignore
import classes from './RegistrationModal.module.css';
import {useInput} from "../../../../hooks/useInput";
import {IUser} from "../../../../types/user";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useDispatch} from 'react-redux';
import {useUserActions} from "../../../../hooks/use_actions/useUserActions";
import UserService from "../../../../api/UserService";

interface RegistrationModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setLoginModal: React.Dispatch<boolean>
}

const RegistrationModal: FC<RegistrationModalProps> = (
    {
        modal,
        setModal,
        setLoginModal
    }) => {
    const [isUserExists, setUserExists] = useState<boolean>(false)
    const name = useInput('', {isEmpty: true})
    const email = useInput('', {isEmpty: true, isEmail: ''})
    const phone = useInput('', {isEmpty: true, isPhone: ''})
    const password = useInput('', {isEmpty: true})

    const registerUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const userFromDb = await UserService.findUserByEmail(email.value)

        if (typeof userFromDb === 'object') {
            setUserExists(true)
        } else {
            let signUpRequest = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                password: password.value
            }
            await UserService.saveUser(signUpRequest)

            setModal(false)
            setLoginModal(true)
            setInitValues()
        }
    }

    const openLoginModal = () => {
        setModal(false)
        setLoginModal(true)
    }

    const setInitValues = (): void => {
        name.setValue('')
        name.setDirty(false)
        email.setValue('')
        email.setDirty(false)
        phone.setValue('')
        phone.setDirty(false)
        password.setValue('')
        password.setDirty(false)
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
                    ???????? ?????????????????????? ?????????? ?????????? ?????? ??????????????????????????????
                </div>
                <div className={classes.data}>
                    <div className={(name.isDirty && (name.isEmpty))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        ???????? ?????????????????? ??????????????
                    </div>
                    <label>?????????????? ??????</label>
                    <input type='text' value={name.value}
                           onChange={e => name.onChange(e)}
                           onBlur={() => name.onBlur()}/>
                </div>
                <div className={classes.data}>
                    <div className={(email.isDirty && (email.isEmpty || email.emailError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        ???????? ?????????????????? ??????????????
                    </div>
                    <label>?????????????? email</label>
                    <input type='email' value={email.value}
                           onChange={e => email.onChange(e)}
                           onBlur={() => email.onBlur()}/>
                </div>
                <div className={classes.data}>
                    <div className={(phone.isDirty && (phone.isEmpty || phone.phoneError))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        ???????? ?????????????????? ??????????????
                    </div>
                    <label>?????????????? ???????? ?????????? ????????????????</label>
                    <input type='tel' value={phone.value}
                           onChange={e => phone.onChange(e)}
                           onBlur={() => phone.onBlur()}/>
                </div>
                <div className={classes.data}>
                    <div className={(password.isDirty && (password.isEmpty))
                        ? classes.incorrectData
                        : [classes.incorrectData, classes.hidden].join(' ')}>
                        ???????? ?????????????????? ??????????????
                    </div>
                    <label>?????????????? ????????????</label>
                    <input type='password' value={password.value}
                           onChange={e => password.onChange(e)}
                           onBlur={() => password.onBlur()}/>
                </div>
                <div className={classes.button_block}>
                    <div className={classes.inner}>

                    </div>
                    <button disabled={!name.isInputValid || !email.isInputValid
                        || !phone.isInputValid || !password.isInputValid}
                            type='submit' onClick={e => registerUser(e)}>????????????????????????????????????
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