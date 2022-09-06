import React, {FC, useState} from 'react';
// @ts-ignore
import classes from './BookTableModal.module.css';
import Modal from "../Modal";
import InfoModal from "../info_modal/InfoModal";
import {useInput} from "../../../../hooks/useInput";

interface BookTableModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    setRegistrationModal: React.Dispatch<boolean>
}

const BookTableModal: FC<BookTableModalProps> = (
    {
        modal,
        setModal,
        setRegistrationModal
    }
) => {
    const [orderDate, setOrderDate] = useState<string>('');
    const [infoModal, setInfoModal] = useState<boolean>(false)

    const name = useInput('', {isEmpty: true})
    const phone = useInput('', {isEmpty: true, isPhone: ''})
    const persons = useInput('', {isEmpty: true})
    const date = useInput('', {isEmpty: true})
    const time = useInput('', {isEmpty: true})

    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }
    const bookTable = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        setOrderDate(date.value)

        setModal(false)
        setInfoModal(true)
        setTimeout(() => {
            setInfoModal(false)
            setInitValues()
        }, 2000)
    }

    const setInitValues = ():void => {
        name.setValue('')
        name.setDirty(false)
        phone.setValue('')
        phone.setDirty(false)
        persons.setValue('')
        persons.setDirty(false)
        date.setValue('')
        date.setDirty(false)
        time.setValue('')
        time.setDirty(false)
    }

    return (
        <div>
            <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
                <div className={classes.text}>
                    Заказать <span> столик</span>
                </div>
                <form action='#'>
                    <div className={classes.data}>
                        <div className={(name.isDirty && (name.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>Укажите ваше имя</label>
                        <input type='text'
                               value={name.value}
                               onChange={e => name.onChange(e)}
                               onBlur={e => name.onBlur(e)}
                        />
                    </div>
                    <div className={classes.data}>
                        <div className={(phone.isDirty && (phone.isEmpty || phone.phoneError))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>Укажите свой номер телефона <span>(+375255198474)</span></label>
                        <input type='tel'
                               value={phone.value}
                               onChange={e => phone.onChange(e)}
                               onBlur={e => phone.onBlur(e)}
                        />
                    </div>
                    <div className={classes.data}>
                        <div className={(persons.isDirty && (persons.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>Сколько будет человек?</label>
                        <input type='number'
                               value={persons.value}
                               onChange={e => persons.onChange(e)}
                               onBlur={e => persons.onBlur(e)}
                        />
                    </div>
                    <div className={classes.data}>
                        <div className={(date.isDirty && (date.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>На какое число хотите заказать столик?</label>
                        <input type='date'
                               value={date.value}
                               onChange={e => date.onChange(e)}
                               onBlur={e => date.onBlur(e)}
                        />
                    </div>
                    <div className={classes.data}>
                        <div className={(time.isDirty && (time.isEmpty))
                            ? classes.incorrectData
                            : [classes.incorrectData, classes.hidden].join(' ')}>
                            Поле заполнено неверно
                        </div>
                        <label>На какое время хотите заказать столик?</label>
                        <input type='time'
                               value={time.value}
                               onChange={e => time.onChange(e)}
                               onBlur={e => time.onBlur(e)}
                        />
                    </div>
                    <div className={classes.button_block}>
                        <div className={classes.inner}>

                        </div>
                        <button disabled={!name.isInputValid || !phone.isInputValid
                            || !persons.isInputValid || !date.isInputValid || !time.isInputValid}
                            type='submit' onClick={e => bookTable(e)}>Заказать</button>
                    </div>
                    <div className={classes.signup_link}>
                        Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                    </div>
                </form>
            </Modal>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>Заказ на <span>{orderDate}</span> успешно добавлен в очередь, ожидайте звонка</label>
            </InfoModal>
        </div>
    );
};

export default BookTableModal;