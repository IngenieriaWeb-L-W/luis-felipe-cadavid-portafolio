import React from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
            <div className='rounded-lg bg-white p-4 shadow-lg'>
                <button
                    onClick={onClose}
                    className=' absolute right-0 top-0 m-4'
                >
                    Close
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
