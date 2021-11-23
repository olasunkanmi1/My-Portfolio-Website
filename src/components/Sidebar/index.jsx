import React from "react";
import { SidebarStyled } from "./Styled";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const target = e.target.getAttribute("href")
  //   const location = document.querySelector(target).offsetTop
    
  //   window.scrollTo({
  //     left: 0,
  //     top: location - 85,
  //   })
  // }

  return (
    <SidebarStyled isOpen={isOpen} onClick={toggle}>
      <Scrollspy
        className="scrollspy"
        items={["home", "about", "skills", "portfolio", "contact"]}
        currentClassName="current"
      >
        {menuData.map((link) => (
          <li className="menu-link" key={link.title}>
            <Link to={link.title} smooth={true} duration={1000} onClick={toggle} className="link">{link.title}</Link>
          </li>
        ))}
      </Scrollspy>
    </SidebarStyled>
  );
};

export default Sidebar;
