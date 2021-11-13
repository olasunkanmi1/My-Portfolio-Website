import styled from "styled-components";

const NavbarStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  padding: 0rem 10rem;

  @media screen and (max-width: 1200px) {
    padding: 1rem 8rem;
  }

  @media screen and (max-width: 1000px) {
    padding: 1rem 7rem;
  }

  @media screen and (max-width: 920px) {
    padding: 1rem 6rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 3rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 2rem;
  }

  .logo {
    height: 100%;

    img {
      height: 100%;
      width: 100px;
    }
  }

  .menu-icon {
      
  }

  .scrollspy {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;

    a {
      color: red;
    }
  }

  p {
    color: var(--secondary);
    font-size: 40px;
    font-weight: 500;
  }
`;

export default NavbarStyled;
