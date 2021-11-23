import styled from "styled-components";

export const SidebarStyled = styled.section`
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  flex-direction: column;
  width: 100vw;
  z-index: 9;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
  background: #fff;
  padding: 1rem 0;
  padding-top: 85px;
  height: 100vh;
  background: transparent;

  .scrollspy {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 100vw;
    padding: 1rem 5rem;

    @media screen and (max-width: 600px) {
      padding: 1rem 4rem;
    }

    @media screen and (max-width: 500px) {
      padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
      padding: 1rem 2rem;
    }
  }

  .menu-link {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 100%;
    cursor: pointer;
    padding: 15px 10px;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
  }

  .menu-link a {
    transition: 0.3s;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    width: 100%;
  }

  .menu-link a:hover {
    color: var(--secondary);
  }

  .menu-link:last-child {
    margin-bottom: 0;
  }

  .current a {
    color: var(--secondary);
    font-weight: 600;
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
`;
