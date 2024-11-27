import Logo from '../../Fragments/Navbar/Logo';
import Nav from '../../Fragments/Navbar/Nav';
import './Index.css'

const Footer = (props) => {
    const {icon1,icon2,icon3,icon4,icon5,logo} = props
  return (
    <footer>
      <section className="footer-header">
        <Logo img={logo}>PERTASHOP</Logo>
        <Nav title1="Home  |" title2="About  |" title3="Services  |" title4="Contact" />
      </section>
      <article className="copyright">
        <p>Copyright By Pertashop 2024</p>
        <div className="copyright-icon">
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
          <img src={icon4} />
          <img src={icon5} />
        </div>
      </article>
    </footer>
  );
};

export default Footer;
