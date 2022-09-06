import React, {FC} from 'react';
import Modal from "../Modal";
// @ts-ignore
import classes from './InfoModal.module.css';

interface InfoModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    children: React.ReactNode
}

const InfoModal: FC<InfoModalProps> = (
    {
        modal,
        setModal,
        children
    }) => {
    return (
        <Modal activeWhenClicked={true} active={modal} setActive={setModal}>
            <div className={classes.info}>
                {children}
            </div>
        </Modal>
    );
};

export default InfoModal;