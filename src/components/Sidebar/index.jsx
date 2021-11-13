import React from "react";
import { SidebarStyled } from "./Styled";
import Scrollspy from "react-scrollspy";
import { menuData } from "../../data/MenuData";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarStyled isOpen={isOpen}>
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
    </SidebarStyled>
  );
};

export default Sidebar;
