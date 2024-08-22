import { useState } from 'react';
import { navLinks } from '../contants';
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full flex py-6 justify-between items-center'>
            <img src="/logo.svg" className='w-[125px] h-[30px]' alt="" />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} onClick={() => setActive(nav.title)} className={`font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"}  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <div className='text-white text-3xl' onClick={() => setToggle(!toggle)}>{toggle ? <IoClose /> : <IoMenu />}</div>

                <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-black-gradient sidebar`}>
                    <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} onClick={() => setActive(nav.title)} className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"}  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} `}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar