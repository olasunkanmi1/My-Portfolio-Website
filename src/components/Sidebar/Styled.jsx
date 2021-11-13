import styled from "styled-components";

export const SidebarStyled = styled.section`
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  flex-direction: column;
  width: 100%;
  z-index: 9;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
  background: #fff;
  padding: 1rem 5rem;
  padding-top: calc(1rem + 85px);

  @media screen and (max-width: 600px) {
    padding: 1rem 4rem;
    padding-top: calc(1rem + 85px);
  }

  @media screen and (max-width: 500px) {
    padding: 1rem 3rem;
    padding-top: calc(1rem + 85px);
  }

  @media screen and (max-width: 450px) {
    padding: 1rem 2rem;
    padding-top: calc(1rem + 85px);
  }

  .scrollspy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .current::before {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: var(--secondary);
    transition: 0.2s ease-in-out;
  }

  .menu-link {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    width: 100%;
    cursor: pointer;
    padding: 15px 10px;
    margin-bottom: 20px;
    position: relative;

    a {
      color: #000;
    }
  }

  .menu-link:last-child {
    margin-bottom: 0;
  }
`;
