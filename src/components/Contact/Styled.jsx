import styled from "styled-components";

export const ContactStyled = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-size: 17px;
    font-weight: 500;
    margin: 10px 0 20px 0;
  }

  .wrap {
    display: flex;
    justify-content: space-evenly;

    form {
      display: flex;
      flex-direction: column;
      width: 350px;
      justify-content: flex-end;

      div {
        margin-bottom: 10px;

        input,
        textarea {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 8px;
          font-size: 14px;
          font-weight: 500;
          width: 100%;
          outline: none;
          border: 1px solid var(--primary);
          transition: 0.3s ease-in-out;
          background: #ddd;
          resize: none;

          :focus {
            box-shadow: var(--primary) 0px 0px 5px;
          }
        }
        p {
          color: red;
          font-size: 12px;
          margin: 3px 0;
        }
      }

      button {
        display: flex;
        justify-content: Center;
        align-items: center;
        padding: 7px 10px;
        font-size: 16px;
        font-weight: 600;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        outline: 2px solid var(--primary);
        border: none;
        background: none;
        width: 100px;
        color: var(--primary);

        :hover {
          background: var(--primary);
          color: #fff;
        }
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        width: 35px;
        height: 35px;
        margin-bottom: 10px;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
