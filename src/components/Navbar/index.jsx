import { useState } from "react";
import { NavbarStyled } from "./Styled";
import logo from "../../assets/logo.png";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";
import Sidebar from "../Sidebar";
import { ReactComponent as Top } from "../../assets/icons/top.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href")
    const location = document.querySelector(target).offsetTop
    
    window.scrollTo({
      left: 0,
      top: location - 85,
    })
  }

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
              <a href={`#${link.title}`} onClick={handleClick}>{link.title}</a>
            </li>
          ))}
        </Scrollspy>

        <div className="back-to-top">
          <a href="#home"> <Top /> </a>
        </div>
      </NavbarStyled>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
