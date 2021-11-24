import styled from "styled-components";

export const NavbarStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  padding: 0rem 10rem;
  background: #fff;

  @media screen and (max-width: 1200px) {
    padding: 0 8rem;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 7rem;
  }

  @media screen and (max-width: 920px) {
    padding: 0 6rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 450px) {
    padding: 0 2rem;
  }

  .logo {
    height: 100%;

    img {
      height: 100%;
      width: 100px;
    }
  }

  .menu-icon {
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      position: relative;

      div {
        display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
        width: 80%;
        height: 3px;
        background: var(--primary);
      }
    }
  }

  .menu-icon::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 3px;
    background: var(--primary);
    transition: 0.2s;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0px) rotate(45deg)" : "translateY(-10px)"};
  }

  .menu-icon::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 3px;
    background: var(--primary);
    transition: 0.2s;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0px) rotate(-45deg)" : "translateY(10px)"};
  }

  .scrollspy {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .menu-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 15px;
    padding: 10px 15px;
    cursor: pointer;
    position: relative;
  }

  .menu-link .link {
    transition: 0.3s;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .menu-link .link:hover {
    color: var(--secondary);
  }

  .menu-link:last-child {
    margin-right: 0;
  }
  
  .current .link {
    color: var(--secondary);
    font-weight: 600;
  }

  .current::before {
    content: "";
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: var(--secondary);
    /* transition: 0.2s ease-in-out; */
  }

  .back-to-top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40rem;
    right: 20px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: #F92524;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s ease-in-out;

    svg {
      position: absolute;
      bottom: 0;
      width: 85%;
      animation: top 2s infinite;
    }
  }

  .back-to-top.active {
    visibility: visible;
    opacity: 0.6;
    bottom: 40px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }

  @keyframes top {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }
`;
