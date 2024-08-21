import React from 'react'

const Header = ({ setIsAdding }) => {
    return (
        <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-20">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-lg md:text-3xl font-bold mb-2"> Employee Management Software </h1>
                <button onClick={() => setIsAdding(true)} className="bg-white text-blue-600 px-2 lg:px-4 py-0.5 lg:py-2 rounded-md shadow-md hover:bg-gray-100 transition" > Add Employee </button>
            </div>
        </header>
    )
}

export default Header