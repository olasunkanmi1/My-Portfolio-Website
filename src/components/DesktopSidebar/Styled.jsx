import styled from "styled-components";

export const SidebarStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  width: 120px;
  background: #fff;
  border-radius: 5px;
  margin-right: 30px;

  .logo {
    width: 100%;
    margin-bottom: 30px;

    img {
      height: 100%;
      width: 100px;
    }
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
      transition: .3s ease-in-out;
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
`;
