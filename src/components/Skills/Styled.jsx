import styled from "styled-components";

export const SkillsStyled = styled.section`
  h1 {
    font-size: 30px;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;

    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px 50px 0 0;

      svg {
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }
    }
  }
`;
