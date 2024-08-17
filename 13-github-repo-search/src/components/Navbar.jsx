import { Nav, NavItem, Navbar, NavLink, NavbarToggler, NavbarBrand, NavbarText, Collapse } from 'reactstrap';
import { useGlobalContext } from '../context/UserContext';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [isToggled, setIsToggled] = useState(false)
    const { user, setUser } = useGlobalContext();

    const toggle = () => setIsToggled(!isToggled)

    return (
        <Navbar color='danger' light expand="sm">
            <NavbarBrand><Link to="/" className='text-white'>Github Repo Search</Link></NavbarBrand>
            <NavbarText className='text-white'>Welcome {user?.email ? user.email : ""}</NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isToggled} navbar>
                <Nav navbar style={{ marginLeft: 'auto' }}>
                    {user ? (
                        <NavItem><NavLink className='text-white' onClick={() => { setUser(null) }}>Logout</NavLink></NavItem>
                    ) : (
                        <>
                            <NavItem><NavLink tag={Link} to="/signup" className='text-white'>SignUp</NavLink></NavItem>
                            <NavItem><NavLink tag={Link} to="/signin" className='text-white'>SignIn</NavLink></NavItem>
                        </>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavBar