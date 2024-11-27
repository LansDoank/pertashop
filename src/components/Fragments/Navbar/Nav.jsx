const Nav = (props) => {
  const { title1, title2, title3, title4 } = props;
  return (
    <nav className="">
      <ul className="">
        <li className="">
          <a href="#home">{title1}</a>
        </li>
        <li className="">
          <a href="#about">{title2}</a>
        </li>
        <li className="">
          <a href="#services">{title3}</a>
        </li>
        <li className="">
          <a href="#contact">{title4}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
