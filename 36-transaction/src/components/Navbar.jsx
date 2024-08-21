import { FaBars, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = ({ title, onOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    },[]);

    return (
        <div className="px-4 bg-white shadow-md z-20">
            <div className="max-w-7xl h-16 mx-auto flex items-center justify-between">
                <button className="block lg:hidden text-gray-600 hover:text-gray-900" onClick={onOpen}>
                    <FaBars className="text-2xl" />
                </button>

                <h1 className="text-2xl font-medium" >{title}</h1>

                <div className="relative" ref={menuRef}>
                    <button className="text-gray-600 hover:text-gray-900" onClick={toggleMenu} ><FaUserTie className="text-2xl" /></button>
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                            <Link to="/logout" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)} > Logout </Link>
                            <Link to="/support" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)} > Support </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar