import styled from "styled-components";

export const ContactStyled = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-size: 17px;
    font-weight: 500;
    margin: 15px 0;
  }

  div {
      display: flex;
      flex-direction: column;

      svg {
          width: 30px;
          height: 30px;
      }
  }
`;
