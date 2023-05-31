import styled from "styled-components";

export const SidebarStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  max-height: 490px;
  width: 120px;
  min-width: 120px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  left: calc((100vw - 1024px) / 2);
  top: calc((100vh - 490px) / 2);

  @media screen and (max-width: 1345px) {
      left: 10rem;
  }
  
  @media screen and (max-width: 1200px) {
      left: 8rem;
  }

  .logo {
    width: 100%;
    height: 100px;
    margin-bottom: 30px;

    img {
      /* height: 100%; */
      width: 100%;
    }
  }

  .scrollspy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px 15px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: 0.3s ease-in-out;
      text-transform: capitalize;
      position: relative;

      :hover {
        color: var(--secondary);
      }
    }

    .active-btn {
      font-weight: 600;
      color: var(--secondary);
      position: relative;
    }

    .active-btn:before {
      content: "";
      position: absolute;
      right: -10px;
      width: 4px;
      height: 100%;
      background: var(--secondary);
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
