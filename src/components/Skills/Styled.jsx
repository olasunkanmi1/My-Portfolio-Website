import styled from "styled-components";

export const SkillsStyled = styled.section`
gap: 30px;

  h1 {
    font-size: 30px;
    position: relative;
    margin-bottom: 10px;

    &:before {
      content: '';
      position: absolute;
      bottom: -10px;
      height: 3px;
      background: var(--secondary);
      width: 70px;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* padding: 25px; */

      svg {
        width: 70px;
        height: 70px;
        margin-bottom: 15px;
      }
    }
  }

  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    color: #fff;
    font-size: 16px;
    border-radius: 3px;
    background: var(--primary);
    width: fit-content;
    margin: auto;
  }

  @media screen and (max-width: 1024px) {
    background: #fff;
    z-index: 1;
  }
`;
