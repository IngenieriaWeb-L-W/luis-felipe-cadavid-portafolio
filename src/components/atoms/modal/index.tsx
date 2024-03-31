import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-4 rounded-lg shadow-lg'>
            <button onClick={onClose} className=' absolute top-0 right-0 m-4'>
                Close
            </button>
            {children}
        </div>
        </div>
    );
};

export default Modal;