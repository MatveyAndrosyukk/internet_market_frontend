import React, {FC} from 'react';

interface ModalProps{
    active: boolean,
    setActive: React.Dispatch<boolean>,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false  )}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;