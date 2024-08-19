import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'><img src="/logo.png" style={{width: '150px'}} alt="logo" /></div>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
    </nav>
  )
}

export default Navbar