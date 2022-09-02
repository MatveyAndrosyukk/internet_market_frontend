import React, {FC, useContext} from 'react';
import BookTableModal from "../modal/book-table-modal/BookTableModal";
import {GlobalContext, GlobalContextValues} from "../../../context/context";

interface BookTableProps{
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    registrationModal?: boolean,
    setRegistrationModal: React.Dispatch<boolean>
}

const Footer:FC<BookTableProps> = ({modal, setModal, setRegistrationModal}) => {
    const {isAuth} = useContext<GlobalContextValues>(GlobalContext)

    const bookTable = () => {
        if (isAuth){
            setModal(true)
        }else {
            setRegistrationModal(true)
        }
    }

    return (
        <div className='book-section'>
            <div className='container'>
                <div className='book-section-line'>
                    <div className='book-section-text'>
                        <div className='book-section-text-big'>
                            Отпразднуйте в одном из
                            самых лучших ресторанов.
                        </div>
                        <div className='book-section-text-small'>
                            Только в этом месяце бизнес-ланч от 40 руб.
                        </div>
                    </div>
                    <div className='book-section-button'>
                        <a className='book-section-btn' onClick={bookTable}>ЗАКАЗ СТОЛИКА</a>
                    </div>
                </div>
            </div>

            <BookTableModal modal={modal}
                            setModal={setModal}
                            setRegistrationModal={setRegistrationModal}
            />
        </div>
    );
};

export default Footer;