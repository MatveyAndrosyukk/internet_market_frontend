import React from 'react';
// @ts-ignore
import classes from "./Modal.module.css";

interface ModalProps {
    active: boolean,
    setActive: React.Dispatch<boolean>,
    activeWhenClicked: boolean
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({active, setActive, activeWhenClicked, children}) => {
    return (
        <div className={active ? [classes.modal, classes.active].join(' ') : classes.modal}
             onClick={() => setActive(activeWhenClicked)}>
            <div className={active ? [classes.modal_content, classes.active].join(' ') : classes.modal_content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;