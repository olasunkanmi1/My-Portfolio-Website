import styled from "styled-components";

export const SkillsStyled = styled.section`
  h1 {
    font-size: 30px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      padding: 25px;

      svg {
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }
    }
  }
`;
