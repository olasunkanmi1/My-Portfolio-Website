import NavbarStyled from "./Styled";
import logo from "../../assets/logo.png";
import ScrollSpy from "react-scrollspy";

const index = () => {
  return (
    <NavbarStyled>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <Scrollspy
        className="scrollspy"
        items={["home", "about", "skills", "portfolio", "contact"]}
        currentClassName="current"
      >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
      </Scrollspy>
    </NavbarStyled>
  );
};

export default index;
