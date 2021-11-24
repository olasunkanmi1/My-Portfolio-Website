import styled from "styled-components";

export const SkillsStyled = styled.section`
  h1 {
    font-size: 30px;
    position: relative;
    margin-bottom: 25px;

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

    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 25px;

      svg {
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    /* margin-top: 85px; */
    background: #fff;
    z-index: 1;
    padding: 2rem 1rem;
    /* border-radius: 5px; */
    padding-top: 95px;
  }
`;
