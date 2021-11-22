import React from "react";
import { SidebarStyled } from "./Styled";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";

const Sidebar = ({ isOpen, toggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href")
    const location = document.querySelector(target).offsetTop
    
    window.scrollTo({
      left: 0,
      top: location - 85,
    })
  }

  return (
    <SidebarStyled isOpen={isOpen} onClick={toggle}>
      <Scrollspy
        className="scrollspy"
        items={["home", "about", "skills", "portfolio", "contact"]}
        currentClassName="current"
      >
        {menuData.map((link) => (
          <li className="menu-link" key={link.title} onClick={toggle}>
            <a href={`#${link.title}`} onClick={handleClick}>{link.title}</a>
          </li>
        ))}
      </Scrollspy>
    </SidebarStyled>
  );
};

export default Sidebar;
