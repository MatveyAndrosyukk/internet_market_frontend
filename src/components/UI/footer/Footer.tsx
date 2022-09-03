import React, {FC, useContext} from 'react';
import BookTableModal from "../modal/book_table_modal/BookTableModal";
import {GlobalContext, GlobalContextValues} from "../../../context/context";
// @ts-ignore
import classes from "./Footer.module.css"
import NavButton from "../button/nav_button/NavButton";

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
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.line}>
                    <div className={classes.text}>
                        <div className={classes.text_big}>
                            Отпразднуйте в одном из
                            самых лучших ресторанов.
                        </div>
                        <div className={classes.text_small}>
                            Только в этом месяце бизнес-ланч от 40 руб.
                        </div>
                    </div>
                    <NavButton onClick={bookTable}>
                        ЗАКАЗ СТОЛИКА
                    </NavButton>
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