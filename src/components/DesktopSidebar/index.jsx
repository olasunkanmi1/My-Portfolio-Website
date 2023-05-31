import React from "react";
import { SidebarStyled } from "./Styled";
import logo from "../../assets/logo.png";
import { menuData } from "../../data/MenuData";

const Sidebar = ({ toggle, changeTab }) => {
  return (
    <SidebarStyled>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <ul>
        {menuData.map((link, index) => (
          <li key={link.title} className={ toggle === index + 1 ? 'active-btn' : null} onClick={() => changeTab(index + 1)}>
              {link.title}
          </li>
        ))}
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;