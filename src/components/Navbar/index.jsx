import { useState } from "react";
import { NavbarStyled } from "./Styled";
import logo from "../../assets/logo.png";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";
import Sidebar from "../Sidebar";
import { ReactComponent as Top } from "../../assets/icons/top.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.back-to-top')
    scroll.classList.toggle("active" , window.scrollY > 600)
  });

  return (
    <>
      <NavbarStyled isOpen={isOpen}>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="menu-icon" onClick={toggle}>
          <div />
        </div>

        <Scrollspy
          className="scrollspy"
          items={["home", "about", "skills", "portfolio", "contact"]}
          currentClassName="current"
        >
          {menuData.map((link) => (
            <li className="menu-link" key={link.title}>
                <Link to={link.title} smooth={true} duration={1000} className="link">{link.title}</Link>
            </li>
          ))}
        </Scrollspy>

        <div className="back-to-top" onClick={() => scroll.scrollToTop()}> <Top /> </div>
      </NavbarStyled>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
