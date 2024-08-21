import { Link, useLocation } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx';
import { BsArrowDownUp } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

const Sidenav = () => {
    const location = useLocation();

    const isActiveLink = (link) => location.pathname === link;

    const navLinks = [
      { icon: RxDashboard, text: "Dashboard", link: "/" },
      { icon: BsArrowDownUp, text: "Transaction", link: "/transactions" },
    ];

    return (
        <div className="bg-white shadow-lg lg:w-64 flex flex-col justify-between">
            <div>
                <h1 className="text-center text-lg font-semibold py-8 text-black">DOSOMECODING</h1>
                <nav className="flex-1 px-4">
                    {navLinks.map(({icon: Icon, text, link}) => (
                        <Link to={link} key={text} className={`flex items-center py-3 px-4 rounded-lg mb-2 cursor-pointer hover:bg-gray-100 ${isActiveLink(link) ? "bg-gray-200 text-gray-900" : "text-gray-600"} `} >
                            <Icon className="w-5 h-5" />
                            <span className="ml-2 text-sm font-medium">{text}</span>   
                        </Link>
                    ))}
                </nav>
                <div className="px-4 pb-6">
                    <Link to="/support" className={`flex items-center py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-100 ${isActiveLink("/support") ? "bg-gray-200 text-gray-900" : "text-gray-600" }`}>
                        <BiSupport className="w-5 h-5" />
                        <span className="ml-2 text-sm font-medium">Support</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidenav