import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light className="navbar">
      <NavbarBrand tag={Link} to="/" className="text-white" >My Contact</NavbarBrand>
      <NavbarText className="text-white float-right"></NavbarText>
    </Navbar>
  )
}

export default Header