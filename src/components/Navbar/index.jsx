import { useState } from "react";
import { NavbarStyled } from "./Styled";
import logo from "../../assets/logo.png";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </Scrollspy>
      </NavbarStyled>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
