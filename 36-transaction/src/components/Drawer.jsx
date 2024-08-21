import { useState } from 'react'
import Sidenav from './Sidenav'

const Drawer = ({ isOpen, onClose }) => {
    const handleOutSideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 z-40 flex" onClick={handleOutSideClick}>
                    <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
                    <div className="relative w-64 h-screen bg-white flex flex-col">
                        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold" onClick={onClose} >X</button>
                        <Sidenav />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Drawer