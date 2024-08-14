import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <Link to="/"><img src="/logo.svg" alt="cocktile logo" className='logo' /></Link>
        </div>
        <ul className='nav-links'>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar