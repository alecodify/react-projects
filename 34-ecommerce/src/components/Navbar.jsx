import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onSearch, cartItemCount }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }

        setSearchQuery('')
    }

    return (
        <div className="bg-[#007fff] text-white fixed w-full top-0 left-0 z-50">
            <header className="max-w-[1100px] mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                    <Link to="/" className="text-white no-underline flex items-center">
                        <h1 className="text-xl md:text-2xl font-bold">E-commerce</h1>
                    </Link>

                    <div className="md:col-span-1 flex justify-center">
                        <form className="flex w-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="flex-grow p-2 text-black rounded-l-md outline-none"
                            />
                            <button
                                type="button"
                                className="bg-white text-[#007fff] px-4 py-2 rounded-r-md"
                                onClick={handleSubmit}
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <Link to="/cart" className="cartIcon flex justify-end items-center relative">
                        <img src="/cart.svg" alt="cart" className="w-8 h-8" />
                        {cartItemCount > 0 && (
                            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartItemCount <= 9 ? cartItemCount : "9+"}
                            </div>
                        )}
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar