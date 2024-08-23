import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdMenu, MdBookmarkAdd, MdExpandMore } from 'react-icons/md';

const HeaderMenu = ({ handleToggle, open, anchorRef }) => {
  return (
    open && (
      <div
        className="absolute bg-white shadow-lg rounded-md mt-4 px-4 py-2 right-4 lg:right-0 lg:mt-8 z-20"
        style={{
          zIndex: 9999,
          top: anchorRef.current ? anchorRef.current.offsetHeight + 10 : 'auto',
        }}>
        <div className="flex flex-col">
          <div className="px-4 py-2 hover:bg-gray-100">
            <Link to={"/categories"} className="text-black no-underline" onClick={handleToggle}>
              Popular
            </Link>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100">
            <Link to={"/categories"} className="text-black no-underline" onClick={handleToggle}>
              Top Rated
            </Link>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100">
            <Link to={"/categories"} className="text-black no-underline" onClick={handleToggle}>
              Upcoming
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="bg-black min-h-14 sticky top-0 z-20">
      <nav className="flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-28 py-4">

        <img
          src="/logo.png"
          className="w-16 cursor-pointer mb-2 md:mb-0"
          onClick={() => navigate('/')}
          alt="Logo"
        />

        <div className="flex-1 flex items-center justify-center lg:justify-end space-x-4 lg:space-x-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-white h-8 w-[80%] md:w-1/2 rounded-lg px-3 focus:outline-none"
          />
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-white flex items-center space-x-1 cursor-pointer">
              <span>IMDb</span>
              <span className="text-xs">Pro</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <MdBookmarkAdd className="text-white text-xl" />
              <p className="text-sm font-semibold text-white">Watchlist</p>
            </div>
            <p className="text-sm font-semibold text-white cursor-pointer">Sign In</p>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p className="text-sm font-semibold text-white">EN</p>
              <MdExpandMore className="text-white text-lg" />
            </div>
          </div>
        </div>

        <div
          className="flex items-center lg:hidden cursor-pointer"
          ref={anchorRef}
          onClick={handleToggle}
        >
          <MdMenu className="text-white text-3xl" />
        </div>

        <HeaderMenu handleToggle={handleToggle} open={open} anchorRef={anchorRef} />
      </nav>
    </header>
  );
};

export default Header;
