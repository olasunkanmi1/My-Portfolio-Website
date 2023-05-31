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
      align-items: flex-end;
      width: 350px;

      .submit_error {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #E65050;
          color: #fff;
          padding: 5px;
          border-radius: 7px;
          font-size: 16px;
          margin: 0 0 15px;
        }

      div {
        margin-bottom: 10px;
        width: 100%;

        input,
        textarea {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 7px 10px;
          font-size: 16px;
          font-weight: 500;
          width: 100%;
          outline: none;
          border: 1px solid var(--primary);
          transition: 0.3s ease-in-out;
          background: #f2f2f2;
          resize: none;
          border-radius: 5px;

          :focus {
            box-shadow: var(--primary) 0px 0px 5px;
          }
        }
        .error {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #E65050;
          font-weight: 700;
          font-size: 14px;
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
        outline: none;
        border: none;
        background: none;
        width: 100px;
        border-radius: 6px;
        background: var(--primary);
        color: #fff;

        :disabled {
          background: rgb(20, 34, 81, .7);
          cursor: not-allowed;
        }
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;

      h4 {
        margin-bottom: 10px;
      }

      div {
        display: flex;
        flex-direction: column;

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

    @media screen and (max-width: 1100px) {
      flex-direction: column;

      form {
        width: 100%;
        margin-bottom: 30px;
      }

      .links {

        div {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      flex-direction: row;

      form {
        width: 350px;
      }

      .links {
        div {
          flex-direction: column;
        }
      }
    }

    @media screen and (max-width: 640px) {
      flex-direction: column;

      form {
        width: 100%;
        margin-bottom: 30px;
      }

      .links {

        div {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
        }
      }
    }
  }
`;
