import { useState } from 'react'
import { Drawer, Navbar, Sidenav } from '../components';

const Layout = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex min-h-screen ">
            <div className={`hidden lg:flex lg:w-64 lg:flex-shrink-0 bg-gray-800 text-white`}>
                <Sidenav />
            </div>

            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
            

            <div className="flex-1 flex flex-col">
                <Navbar title={title} onOpen={() => setIsOpen(true)} />

                <main className="flex-1 overflow-auto p-4 lg:p-6 bg-gray-100">
                    <div className="container mx-auto max-screen-xl" >{children}</div>
                </main>
            </div>

        </div>
    )
}

export default Layout