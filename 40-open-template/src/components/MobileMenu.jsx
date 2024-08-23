import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const MobileMenu = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    useEffect(() => {
        const clickHandler = (event) => {
            if (!mobileNav.current || !trigger.current) return;
            if (
                !mobileNavOpen ||
                mobileNav.current.contains(event.target) ||
                trigger.current.contains(event.target)
            )
                return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [mobileNavOpen]);

    useEffect(() => {
        const keyHandler = (event) => {
            if (!mobileNavOpen || event.keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [mobileNavOpen]);


    return (
        <div className="md:hidden">
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <MdMenu className='text-white text-[30px]' />
            </button>

            <nav
                id="mobile-nav"
                ref={mobileNav}
                className={`absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${mobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className="bg-gray-800 px-4 py-2">
                    <li>
                        <Link
                            to="/signin"
                            className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileMenu