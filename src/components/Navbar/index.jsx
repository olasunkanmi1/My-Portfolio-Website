import { useState } from "react";
import NavbarStyled from "./Styled";
import logo from "../../assets/logo.png";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarStyled>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <div className="menu-icon">
          <div className="rmv" />
      </div>

      <Scrollspy
        className="scrollspy"
        items={["home", "about", "skills", "portfolio", "contact"]}
        currentClassName="current"
      >
        {menuData.map((link) => (
          <li className="menu-link">{link.title}</li>
        ))}
      </Scrollspy>
    </NavbarStyled>
  );
};

export default index;
