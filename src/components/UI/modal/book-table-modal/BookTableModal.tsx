import React, {FC, useContext, useState} from 'react';
import Modal from "../Modal";
import './BookTableModal.css';
import {GlobalContext, GlobalContextValues} from '../../../../context/context'
import {ITable} from "../../../../types/types";
import InfoModal from "../info-modal/InfoModal";

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
    const {tables, setTables} = useContext<GlobalContextValues>(GlobalContext)
    const [table, setTable] = useState<ITable>({name: '', phone: '', persons: '', date: '', time: ''})
    const [date, setDate] = useState<string>('');
    const [infoModal, setInfoModal] = useState<boolean>(false)

    const openRegistrationModal = () => {
        setModal(false)
        setRegistrationModal(true)
    }
    const bookTable = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setDate(table['date'])
        setTables([...tables, table])
        setTable({name: '', phone: '', persons: '', date: '', time: ''})
        setModal(false)
        setInfoModal(true)
        setTimeout(() => {
            setInfoModal(false)
        }, 2000)
    }
    return (
        <div>
            <Modal activeWhenClicked={false} active={modal} setActive={setModal}>
                <div className='text'>
                    Заказать <span> столик</span>
                </div>
                <form action='#'>
                    <div className='data'>
                        <label>Укажите ваше имя</label>
                        <input type='text'
                               value={table.name}
                               onChange={e => setTable({...table, name: e.target.value})}
                        />
                    </div>
                    <div className='data'>
                        <label>Укажите свой номер телефона <span>(+375255198474)</span></label>
                        <input type='tel'
                               value={table.phone}
                               onChange={e => setTable({...table, phone: e.target.value})}
                        />
                    </div>
                    <div className='data'>
                        <label>Сколько будет человек?</label>
                        <input type='number'
                               value={table.persons}
                               onChange={e => setTable({...table, persons: e.target.value})}
                        />
                    </div>
                    <div className='data'>
                        <label>На какое число хотите заказать столик?</label>
                        <input type='date'
                               value={table.date}
                               onChange={e => setTable({...table, date: e.target.value})}
                        />
                    </div>
                    <div className='data'>
                        <label>На какое время хотите заказать столик?</label>
                        <input type='time'
                               value={table.time}
                               onChange={e => setTable({...table, time: e.target.value})}
                        />
                    </div>
                    <div className='btn'>
                        <div className='inner'>

                        </div>
                        <button type='submit' onClick={e => bookTable(e)}>Заказать</button>
                    </div>
                    <div className='signup-link'>
                        Not a member? <a href='#' onClick={openRegistrationModal}>Singup now</a>
                    </div>
                </form>
            </Modal>
            <InfoModal modal={infoModal} setModal={setInfoModal}>
                <label>Заказ на <span>{date}</span> успешно добавлен в очередь, ожидайте звонка</label>
            </InfoModal>
        </div>
    );
};

export default BookTableModal;