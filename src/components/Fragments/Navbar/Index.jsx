import Logo from './Logo';
import Nav from './Nav';
import './Index.css'

const Navbar = (props) => {
  const { src } = props;
  return (
    <header className="header">
      <Logo img={src}>PERTASHOP</Logo>
      <Nav title1="Home" title2="About" title3="Services" title4="Contact"></Nav>
    </header>
  );
};

export default Navbar;
