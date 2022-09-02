import React, {FC} from 'react';
import Modal from "../Modal";
import './InfoModal.css'

interface InfoModalProps {
    modal: boolean,
    setModal: React.Dispatch<boolean>,
    children: React.ReactNode
}
const InfoModal:FC<InfoModalProps> = ({modal, setModal, children}) => {
    return (
        <Modal activeWhenClicked={true} active={modal} setActive={setModal}>
            <div className='info'>
                {children}
            </div>
        </Modal>
    );
};

export default InfoModal;